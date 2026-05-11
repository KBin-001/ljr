import { defineConfig, type Plugin, type ViteDevServer } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import type { IncomingMessage, ServerResponse } from "node:http";
import path from "node:path";

function readDevVars() {
  const file = path.resolve(process.cwd(), ".dev.vars");
  if (!fs.existsSync(file)) return {};

  return Object.fromEntries(
    fs
      .readFileSync(file, "utf-8")
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#") && line.includes("="))
      .map((line) => {
        const index = line.indexOf("=");
        return [line.slice(0, index), line.slice(index + 1)];
      }),
  );
}

function devGeocodeProxy(): Plugin {
  return {
    name: "dev-geocode-proxy",
    configureServer(server: ViteDevServer) {
      server.middlewares.use(
        "/api/geocode",
        async (req: IncomingMessage, res: ServerResponse) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end(JSON.stringify({ success: false, message: "Method Not Allowed" }));
          return;
        }

        try {
          const rawBody = await new Promise<string>((resolve, reject) => {
            let body = "";
            req.on("data", (chunk: Buffer) => {
              body += chunk;
            });
            req.on("end", () => resolve(body));
            req.on("error", reject);
          });

          const body = JSON.parse(rawBody || "{}") as { address?: string; city?: string };
          const env = readDevVars();
          const key = process.env.AMAP_WEB_SERVICE_KEY || env.AMAP_WEB_SERVICE_KEY;

          if (!key) {
            throw new Error("缺少 AMAP_WEB_SERVICE_KEY，请配置 .dev.vars");
          }

          const address = body.address?.trim();
          if (!address) {
            res.statusCode = 400;
            res.end(JSON.stringify({ success: false, message: "address 不能为空" }));
            return;
          }

          const url = new URL("https://restapi.amap.com/v3/geocode/geo");
          url.searchParams.set("key", key);
          url.searchParams.set("address", address);
          url.searchParams.set("city", body.city?.trim() || "深圳");
          url.searchParams.set("output", "json");

          const upstream = await fetch(url);
          const data = await upstream.json();
          const location = data?.geocodes?.[0]?.location;

          res.setHeader("Content-Type", "application/json; charset=utf-8");
          if (data?.status !== "1" || !location) {
            res.statusCode = 502;
            res.end(JSON.stringify({ success: false, message: data?.info || "地理编码失败" }));
            return;
          }

          const [lngText, latText] = location.split(",");
          res.end(
            JSON.stringify({
              success: true,
              lng: Number(lngText),
              lat: Number(latText),
              formattedAddress: data.geocodes[0].formatted_address || address,
            }),
          );
        } catch (error) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          res.end(
            JSON.stringify({
              success: false,
              message: error instanceof Error ? error.message : "未知错误",
            }),
          );
        }
      },
    );
    },
  };
}

export default defineConfig({
  base: process.env.GITHUB_PAGES === "true" ? "/ljr/" : "/",
  plugins: [react(), devGeocodeProxy()],
});
