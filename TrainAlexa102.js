"use strict";

// Include the Alexa SDK
var Alexa = require("alexa-sdk");

// The handlers object tells Alexa how to handle various actions
    
var handlers = {

  //Lets map our skill's intent to the interaction model.  If you have an intent say 
  //HelloIntent, add it to the handlers as a key of the same name.

  "HelloIntent": function () {

//This function will execure when a user say any of the utterances configured.
//Lets add response to this intent.  We will use .response.speak() and .emit()
//which generates JSON response when Alexa triggers HelloIntent

    this.response.speak("Hello, Brunel University"); 
    this.emit(":responseReady");

// .response.speak() method accepts the string response for when the HelloIntent is 
//triggered. Then the this.emit(:responseReady) 
//method triggers the Lambda function to respond with the "Hello, Brunel University" string.
  },

//If a user invokes the skill with the invocation name, but does not provide any command 
//mapping to an intent, like "Alexa open code academy", our skill will receive a LaunchRequest,
// instead of "IntentRequest".  To provide a response for this type of request, we will add another 
//handler function called LaunchRequest inside our handlers object.
"myFavoriteTopicIntent": function() {
    this.emit(":tell", "Hello, what's your favorite Subject")
},
"LaunchRequest": function () {
    this.response.speak("Welcome to Brunel University");
    this.emit(":responseReady");
}
};

//Add a function that AWS Lambda invokes when Alexa executes your code.
//This is required for every Lambda function and isn't unique to Alexa skills.
//This is the function that AWS Lambda calls every time Alexa uses your skill.
//Read more on Lambda Function Handler for Node.js at http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html
exports.handler = function(event, context, callback) {

// Set up the Alexa object, It will accept two parameters. 
//(a) event - AWS Lambda uses this parameter to pass in event data to the handler.
//(b) context - AWS Lambda uses this parameter to provide your handler the runtime information 
// of the Lambda function that is executing.

var alexa = Alexa.handler(event, context);

// Give our Alexa instance instructions for handling commands and execute the request.
// Register Handlers
alexa.registerHandlers(handlers); 

// Start our Alexa code
alexa.execute(); 
}