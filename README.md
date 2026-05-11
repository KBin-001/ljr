# 深圳门店路线规划

React + Vite + TypeScript 手机端门店路线规划网页，面向 Cloudflare Pages 部署。

## 功能

- 内置深圳门店数据
- 排除光明区、宝安区
- 每天 5 家门店，最后一天允许少于 5 家
- 每天从宝田一路出发
- 按地铁 + 骑单车的数学时间模型优化访问顺序
- 高德地图显示当天起点和 1-5 门店点
- 支持高德导航跳转
- 支持坐标缓存、路线缓存、清除缓存、重新生成路线

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`

环境变量：

```text
VITE_AMAP_JS_KEY=你的高德 Web端(JS API) Key
VITE_AMAP_SECURITY_CODE=你的 securityJsCode
```

如果另有高德 Web服务 Key，可在 Cloudflare Pages Secret 中设置：

```text
AMAP_WEB_SERVICE_KEY=你的高德 Web服务 Key
```

部署后需要在高德控制台把 Pages 域名加入 JS API Key 的域名白名单。

## GitHub Pages

推送到 `main` 后，GitHub Actions 会自动构建并部署到：

```text
https://KBin-001.github.io/ljr/
```

需要在 GitHub 仓库 Settings -> Secrets and variables -> Actions 添加：

```text
VITE_AMAP_JS_KEY
VITE_AMAP_SECURITY_CODE
```

同时在高德控制台把 `KBin-001.github.io` 加入 JS API Key 的域名白名单。
