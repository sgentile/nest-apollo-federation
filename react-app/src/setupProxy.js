const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: process.env.REACT_APP_GATEWAY_API_URL,
      logLevel: "debug",
      changeOrigin: true,
      //   autoRewrite: true,
    })
  );
  app.use(
    "/graphql",
    createProxyMiddleware({
      target: process.env.REACT_APP_SUBSCRIPTIONS_API_URL,
      ws: true,
    })
  );
};
