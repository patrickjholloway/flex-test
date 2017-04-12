const sdk = require('kinvey-flex-sdk');
function noop() {};
var service = sdk.service({port:3000},(err, flex) => {
  var dataSdk = flex.data;
  var flexFunctions = flex.functions;
  var flexAuth = flex.auth;
  dataSdk.serviceObject('red-line-schedule');
  dataSdk.serviceObject('green-line-schedule');
  dataSdk.serviceObject('blue-line-schedule');
  dataSdk.serviceObject('organge-line-schedule');
  flexFunctions.register('getRedLineData', noop);
  flexFunctions.register('getGreenLineData', noop);
  flexFunctions.register('getBlueLineData', noop);
  flexFunctions.register('getOrangeLineData', noop);
  flexAuth.register('mbtaAuth', noop);
});
