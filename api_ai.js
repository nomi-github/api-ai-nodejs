var apiai = require('apiai');
 
var app = apiai("4ab29aa361504abf9752130b886008f4");
 
var request = app.textRequest('test', {
    sessionId: 'fjeofjoajfoiejfojewofioa'
});
 
request.on('response', function(response) {
    console.log(response);
});
 
request.on('error', function(error) {
    console.log(error);
});
 
request.end();