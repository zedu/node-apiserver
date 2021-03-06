/* automatically generated by JSCoverage - do not edit */
if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (! _$jscoverage['middleware/httpauth.js']) {
  _$jscoverage['middleware/httpauth.js'] = [];
  _$jscoverage['middleware/httpauth.js'][1] = 0;
  _$jscoverage['middleware/httpauth.js'][2] = 0;
  _$jscoverage['middleware/httpauth.js'][3] = 0;
  _$jscoverage['middleware/httpauth.js'][4] = 0;
  _$jscoverage['middleware/httpauth.js'][6] = 0;
  _$jscoverage['middleware/httpauth.js'][7] = 0;
  _$jscoverage['middleware/httpauth.js'][8] = 0;
  _$jscoverage['middleware/httpauth.js'][12] = 0;
  _$jscoverage['middleware/httpauth.js'][13] = 0;
  _$jscoverage['middleware/httpauth.js'][14] = 0;
  _$jscoverage['middleware/httpauth.js'][15] = 0;
  _$jscoverage['middleware/httpauth.js'][17] = 0;
  _$jscoverage['middleware/httpauth.js'][18] = 0;
  _$jscoverage['middleware/httpauth.js'][19] = 0;
  _$jscoverage['middleware/httpauth.js'][21] = 0;
  _$jscoverage['middleware/httpauth.js'][22] = 0;
  _$jscoverage['middleware/httpauth.js'][24] = 0;
  _$jscoverage['middleware/httpauth.js'][28] = 0;
  _$jscoverage['middleware/httpauth.js'][29] = 0;
}
_$jscoverage['middleware/httpauth.js'][1]++;
module.exports = (function (options) {
  _$jscoverage['middleware/httpauth.js'][2]++;
  options = (options !== null && options !== undefined && options.constructor === Object)? options: {};
  _$jscoverage['middleware/httpauth.js'][3]++;
  options.realm = options.realm || "Please signin.";
  _$jscoverage['middleware/httpauth.js'][4]++;
  options.credentials = options.credentials || [];
  _$jscoverage['middleware/httpauth.js'][6]++;
  if (options.encode) {
    _$jscoverage['middleware/httpauth.js'][7]++;
    options.credentials.forEach((function (credential, i) {
  _$jscoverage['middleware/httpauth.js'][8]++;
  options.credentials[i] = "Basic " + new Buffer(credential, "utf8").toString("base64");
}));
  }
  _$jscoverage['middleware/httpauth.js'][12]++;
  return (function (request, response, next) {
  _$jscoverage['middleware/httpauth.js'][13]++;
  if (request.headers.authorization === undefined) {
    _$jscoverage['middleware/httpauth.js'][14]++;
    onAuthFailed(response, options.realm);
    _$jscoverage['middleware/httpauth.js'][15]++;
    return next(null, true);
  }
  _$jscoverage['middleware/httpauth.js'][17]++;
  var allowed = false;
  _$jscoverage['middleware/httpauth.js'][18]++;
  for (var i = 0; i < options.credentials.length && allowed === false; i++) {
    _$jscoverage['middleware/httpauth.js'][19]++;
    allowed |= options.credentials[i] === request.headers.authorization;
}
  _$jscoverage['middleware/httpauth.js'][21]++;
  if (! allowed) {
    _$jscoverage['middleware/httpauth.js'][22]++;
    onAuthFailed(response, options.realm);
  }
  _$jscoverage['middleware/httpauth.js'][24]++;
  next(null, ! allowed);
});
});
_$jscoverage['middleware/httpauth.js'][28]++;
function onAuthFailed(response, realm) {
  _$jscoverage['middleware/httpauth.js'][29]++;
  response.serveJSON(null, {httpStatusCode: 401, headers: {"www-authenticate": "Basic realm='" + realm + "'"}});
}
_$jscoverage['middleware/httpauth.js'].source = ["module.exports = function (options) {","  options = (options !== null &amp;&amp; options !== undefined &amp;&amp; options.constructor === Object) ? options : {}","  options.realm = options.realm || 'Please signin.'","  options.credentials = options.credentials || []","","  if (options.encode) {","    options.credentials.forEach(function (credential, i) {","      options.credentials[i] = 'Basic ' + new Buffer(credential, 'utf8').toString('base64')","    })","  }","","  return function (request, response, next) {","    if (request.headers.authorization === undefined) {","      onAuthFailed(response, options.realm)","      return next(null, true)","    }","    var allowed = false","    for (var i = 0; i &lt; options.credentials.length &amp;&amp; allowed === false; i++) {","      allowed |= options.credentials[i] === request.headers.authorization","    }","    if (!allowed) {","      onAuthFailed(response, options.realm)","    }","    next(null, !allowed)","  }","}","","function onAuthFailed(response, realm) {","  response.serveJSON(null, {","    httpStatusCode: 401,","    headers: { 'www-authenticate': 'Basic realm=\\'' + realm + '\\'' }","  })","}"];
