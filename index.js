const sdk = require('kinvey-flex-sdk');

var service = sdk.service({port:3000},(err, flex) => {
  var dataSdk = flex.data;   // gets the datalink object from the service
  var widgets = dataSdk.serviceObject('CoolCollection');
});
