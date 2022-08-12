var http = require('http');
var url = require('url');
var {TimeZones} = require('./timezones');

var hostname = '127.0.0.1';
var port = 4000;

var app = http.createServer(function (req, res) {
  const request = url.parse(req.url, true);
  console.log(request);
  if (request.pathname !== '/') {
    if (request.pathname === '/login') {
      var querry = request.query;
      if (querry === null) {
        resApiError(res);
      } else {
        if (querry.account && querry.password) {
          if (querry.account === 'admin' && querry.password === 'admin') {
            resApiSuccess(res);
          } else {
            resApiWrongValues(res, 'Invalid account or password');
          }
        } else {
          resApiError(res);
        }
      }
    } else if (request.pathname === '/timezone_list') {
      var count = TimeZones.length;
      var data = [];
      for (var i = 0; i < count; i++) {
        data.push({
          id: TimeZones[i].id,
          value: TimeZones[i].value,
          text: TimeZones[i].text,
          zones: TimeZones[i].zones,
        });
      }
      resApiSuccess(res, data);
    } else if (request.pathname === '/timezone_detail') {
      var querry = request.query;
      if (querry === null) {
        resApiError(res);
      } else {
        if (querry.id) {
          var data = TimeZones[querry.id];
          if (data) {
            resApiSuccess(res, data);
          } else {
            resApiWrongValues(res, 'No data');
          }
        } else {
          resApiError(res);
        }
      }
    } else {
      resApiNotFound(res);
    }
    return;
  }
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify({
      serviceConnected: true,
    }),
  );
});

var resApiError = function (res) {
  res.writeHead(500, {'Content-Type': 'application/json'});
  res.end(null);
};

var resApiNotFound = function (res) {
  res.writeHead(400, {'Content-Type': 'application/json'});
  res.end(null);
};

var resApiWrongValues = function (res, error) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(
    JSON.stringify({
      code: 1,
      error,
      data: null,
    }),
  );
};

var resApiSuccess = function (res, data) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(
    JSON.stringify({
      code: 0,
      error: null,
      data,
    }),
  );
};

app.listen(port, hostname);
console.log(`Service is started on ${port} at ${hostname}`);

process.on('uncaughtException', function (err) {
  console.log('Exception: ' + err);
});
