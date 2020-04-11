const express = require('express');
const path = require('path');
const app = express();

const forceSSL = function () {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  };
};
app.use(forceSSL());
app.use(express.static(__dirname + '/dist/shop-hub-customer'));
app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname + '/dist/shop-hub-customer/ngsw-worker.js'));
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/shop-hub-customer/index.html'));
});
app.listen(process.env.PORT || 8080);
