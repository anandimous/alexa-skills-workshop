/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.  It's intended to be used at an MLH Localhost
 * Workshop.
 *
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/mlh/mlh-localhost-hacking-with-alexa
 **/

'use strict';

const FACTS = [
  "Deepmind released a new model called Neural turing Machine that led to a one-shot learning in modern AI.",
  "Convolutional neural networks continue to be the most effective method for image analysis due to its threefold learning model.",
  "GAN, used in unsupervised machine learning, is a system of two neural networks competing each other in a zero-sum game framework.",
  "Deep Blue could compute 200 million possible chess positions a second.",
  "Autonomous vehicles are starting to become a mainstream topic and it is powered mainly by AI algorithms.",
  "Hidden markov models can be used to facilitate sign language to english translation.",
  "CAPTCHA is short for Completely Automated Public Turing test to tell Computers and Humans Apart.",
  "China shut down an AI chatbot after it started questioning communism."
  "Artificial Intelligence has crushed all human records in the puzzle game 2048, achieving a high score of 839732.",
  "University of Washington students created an Artificial Intelligence program to detect that’s what she said jokes.",
  "Google has a Quantum Artificial Intelligence Lab with an actual quantum computer.",
  "LSTM is the primary neural net model used in developing modern chatbot frameworks.",
  "Artificial Intelligence was used to generate the battle scenes in the Lord of the Rings films.",
  "The Chinese room argument holds that a program cannot give a computer a mind regardless of how intelligently the program may make the computer behave."
];

var handlers = {
  'LaunchRequest': function () { this.emit('GetFact'); },
  'GetNewFactIntent': function () { this.emit('GetFact'); },
  'GetFact': function() {
    // Randomly select a fact from the array
    const factIndex = Math.floor(Math.random() * FACTS.length);
    const randomFact = FACTS[factIndex];

    // Create speech output
    const speechOutput = "Here's your fact: " + randomFact;
    this.emit(':tellWithCard', speechOutput, "WTF Facts", randomFact);
  }
};

// This is the function that AWS Lambda calls every time Alexa uses your skill.
// Its encapsulated code can be utilized in other files,
// Both exports and module.exports reference the same object.
exports.handler = function(event, context, callback) {
  // Include the AWS Alexa Library.
  const Alexa = require("alexa-sdk");

  // Create an instance of the Alexa library and pass it the requested command.
  var alexa = Alexa.handler(event, context);

  // Give our Alexa instance instructions for handling commands and execute the request.
  alexa.registerHandlers(handlers);
  alexa.execute();
};
