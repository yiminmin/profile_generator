const readline = require('readline');

// Create a readline interface for input and output streams.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define an array to store user's answers
let answers = [];

// Ask the first question
rl.question("What's your name? Nicknames are also acceptable :)", (answer1) => {
  answers.push(answer1);
  // Inside the callback of the first question, ask the second question
  rl.question("What's an activity you like doing?", (answer2) => {
    answers.push(answer2);
    // Continue the pattern until all questions are asked
    rl.question("What do you listen to while doing that?", (answer3) => {
      answers.push(answer3);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer4) => {
        answers.push(answer4);
        rl.question("What's your favourite thing to eat for that meal?", (answer5) => {
          answers.push(answer5);
          rl.question("Which sport is your absolute favourite?", (answer6) => {
            answers.push(answer6);
            // After the last question...
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer7) => {
              answers.push(answer7);
              // Close the readline interface and print out the profile
              rl.close();
              const [name, activity, music, meal, food, sport, superpower] = answers;
              console.log(`${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);
            });
          });
        });
      });
    });
  });
});
