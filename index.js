// http://realtime.mbta.com/developer/api/v2?api_key=wX9NwuHnZU2ToO7GmGR9uw&format=json
const api_key = 'wX9NwuHnZU2ToO7GmGR9');
const sdk = require('kinvey-flex-sdk');
function noop() {};
var service = sdk.service({port:3000, sharedSecret: 'cf6423804948279565d40e1e2c597cdcde0c0a33a6b761d7ebebb1f225457fa03e230ffc13cb702452952d73cd66e880ee322c341869d5c87c49'},(err, flex) => {
  var dataSdk = flex.data;
  var flexFunctions = flex.functions;
  var flexAuth = flex.auth;
  dataSdk.serviceObject('red-line-schedule');
  dataSdk.serviceObject('green-line-schedule');
  dataSdk.serviceObject('blue-line-schedule');
  dataSdk.serviceObject('organge-line-schedule');
  flexFunctions.register('getRedLineData', function (context, complete, modules) {
    complete().setBody().next();
  });
  flexFunctions.register('getGreenLineData', noop);
  flexFunctions.register('getBlueLineData', noop);
  flexFunctions.register('getOrangeLineData', noop);
  flexAuth.register('mbtaAuth', noop);
});
