// http://realtime.mbta.com/developer/api/v2?api_key=wX9NwuHnZU2ToO7GmGR9uw&format=json
const api_key = 'wX9NwuHnZU2ToO7GmGR9');
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
