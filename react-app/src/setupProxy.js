const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();
module.exports = function (app) {
  // console.log('setupProxy', process.env.REACT_APP_TECHSCOUT_AP);

  app.use(
    "/api",
    createProxyMiddleware({
      target: process.env.REACT_APP_GATEWAY_API_URL,
      logLevel: "debug",
      changeOrigin: true,
      //   autoRewrite: true,
    })
  );

  //   app.use(
  //     process.env.REACT_APP_SUBSCRIPTIONS_API_URL,
  //     createProxyMiddleware({
  //       target: process.env.REACT_APP_SUBSCRIPTIONS_API_URL,
  //       // pathRewrite: { "^/socket": "" },
  //       ws: true,
  //       logLevel: "debug",
  //       changeOrigin: true,
  //       //   autoRewrite: true,
  //     })
  //   );
  app.use(
    "/graphql",
    createProxyMiddleware({
      target: process.env.REACT_APP_SUBSCRIPTIONS_API_URL,
      ws: true,
    })
  );

  //   app.use(
  //     "/ws",
  //     createProxyMiddleware({
  //       target: process.env.REACT_APP_SUBSCRIPTIONS_API_URL,
  //       // pathRewrite: { "^/ws": "" },
  //       ws: true,
  //       changeOrigin: true,
  //       // autoRewrite: true,
  //       logLevel: "debug",
  //     })
  //   );
};
