var express = require("@runkit/runkit/express-endpoint/1.0.0");
var consoleLogWrapper = require("console-log-wrapper")
var app = express(exports);
var URL = require('url');
var API_AI = require('apiai');
var appapiai = API_AI(process.env.API_AI_KEY);

var data = {
  "messages": [
    {
      "attachment": {
        "type": "image",
        "payload": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Face-grin.svg/200px-Face-grin.svg.png"
        }
      }
    },
    {
        "text":"Response from api.ai"
    }
  ]
}



app.get("/", (req, res) => {
   //res.send(data);
   
     var request = app.textRequest('test', {
        sessionId: 'fjeofjoajfoiejfojewofioa'
    });

    request.on('response', function(response) {
       var message = { messages: [{ "text": "result" || result.fulfillment.speech }] };
      //  var responseText = response.result.fulfillment.speech;
        var responseMessages = response.result.fulfillment.messages[0].payload;
        res.send(message);
      //  res.send(responseMessages);
    });

    request.on('error', function(error) {
        var message = { messages: [{ "text": "error" || error }] };
         console.error(sender, 'Error while call to api.ai', error);
       // var message = JSON.stringify({ error: error });
      //  res.send(message);
    });
    res.send(data);
   // request.end();
})


