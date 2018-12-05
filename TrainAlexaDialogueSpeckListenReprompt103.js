"use strict";

var Alexa = require("alexa-sdk");

var handlers = {
  'LaunchRequest': function() {
    this.response.speak("Hello, Welcome to Brunel University. What do you think is Students favourite subject?").listen("Tell me what you think is Students's most popular Subject.");
    this.emit(':responseReady');
  },

  'myFavoriteTopicIntent': function () {
    this.response.speak("Computer Science is our most popular Subject.");
    this.emit(':responseReady');
  },
}

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};