type Env = {
  AMAP_WEB_SERVICE_KEY?: string;
};

type PagesContext = {
  request: Request;
  env: Env;
};

type AmapGeoResponse = {
  status: string;
  info: string;
  geocodes?: Array<{
    formatted_address?: string;
    location?: string;
  }>;
};

export async function onRequestPost(context: PagesContext) {
  try {
    const key = context.env.AMAP_WEB_SERVICE_KEY;
    if (!key) {
      return json({ success: false, message: "缺少 AMAP_WEB_SERVICE_KEY" }, 500);
    }

    const body = (await context.request.json()) as { address?: string; city?: string };
    const address = body.address?.trim();
    const city = body.city?.trim() || "深圳";

    if (!address) {
      return json({ success: false, message: "address 不能为空" }, 400);
    }

    const url = new URL("https://restapi.amap.com/v3/geocode/geo");
    url.searchParams.set("key", key);
    url.searchParams.set("address", address);
    url.searchParams.set("city", city);
    url.searchParams.set("output", "json");

    const response = await fetch(url.toString());
    const data = (await response.json()) as AmapGeoResponse;

    if (data.status !== "1" || !data.geocodes?.[0]?.location) {
      return json({ success: false, message: data.info || "地理编码失败" }, 502);
    }

    const [lngText, latText] = data.geocodes[0].location.split(",");
    const lng = Number(lngText);
    const lat = Number(latText);

    if (!Number.isFinite(lng) || !Number.isFinite(lat)) {
      return json({ success: false, message: "高德返回的经纬度无效" }, 502);
    }

    return json({
      success: true,
      lng,
      lat,
      formattedAddress: data.geocodes[0].formatted_address || address,
    });
  } catch (error) {
    return json(
      { success: false, message: error instanceof Error ? error.message : "未知错误" },
      500,
    );
  }
}

export function onRequestOptions() {
  return new Response(null, {
    headers: corsHeaders(),
  });
}

function json(payload: unknown, status = 200) {
  return Response.json(payload, {
    status,
    headers: corsHeaders(),
  });
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}
