"use strict";

var Alexa = require("alexa-sdk");
const APP_ID = 'amzn1.ask.skill.76a8dd8c-e235-4ba3-8050-c41148f31f4a'
var handlers = {
  'LaunchRequest': function() {
    this.response.speak("Hello, Welcome to Brunel University. What do you think is Students favourite subject?").listen("Tell me what you think is Students's most popular Subject.");
    this.emit(':responseReady');
  },
  
  "HelloIntent": function () {

//This function will execure when a user say any of the utterances configured.
//Lets add response to this intent.  We will use .response.speak() and .emit()
//which generates JSON response when Alexa triggers HelloIntent

    this.response.speak("Prady, Welcome to Brunel University"); 
    this.emit(":responseReady");

// .response.speak() method accepts the string response for when the HelloIntent is 
//triggered. Then the this.emit(:responseReady) 
//method triggers the Lambda function to respond with the "Hello, Brunel University" string.
  },

  'SubjectIntent': function () {
    var mySubject = this.event.request.intent.slots.SubjectType.value;
    if (mySubject === "Computer Science") {
        this.response.speak("Correct! Computer Science is the most popular Subject.");
      } else {
        this.response.speak("You guessed that " + mySubject + " is the most popular. Actually, Computer Science is our most popular Subject");
      }
      this.emit(':responseReady');
  }
}

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = 'amzn1.ask.skill.76a8dd8c-e235-4ba3-8050-c41148f31f4a';
    alexa.registerHandlers(handlers);
    alexa.execute();
};