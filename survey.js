const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let quest = {
 name:   "What's your name? Nicknames are also acceptable :)",
 activity:   "What's an activity you like doing?",
 music:    "What do you listen to while doing that?",
 meal:    "Which meal is your favourite (eg: dinner, brunch, etc.)",
 food:   "What's your favourite thing to eat for that meal?",
 sport:    "Which sport is your absolute favourite?",
 superpower:   "What is your superpower? In a few words, tell us what you are amazing at!"
}

let answers = {
    name: '',
    activity: '',
    music: '',
    meal: '',
    food: '',
    sport: '',
    superpower: ''

}

rl.question(quest.name, (answer1) => {
    console.log(`Nice to meet you, ${answer1}`);
    answers.name = answer1;
    rl.question(quest.activity, (answer2) => {
        console.log(`Glad that you like ${answer2}`);
     answers.activity = answer2;
     rl.question(quest.music, (answer3) => {
        console.log(`Glad that you like ${answer3}`);
        answers.music = answer3;
        rl.question(quest.meal, (answer4) => {
            console.log(`${answer4} - soo tasty!`);
            answers.meal = answer4;
            rl.question(quest.food, (answer5) => {
                console.log(`${answer5} - good choice!`);
                answers.food = answer5;
                rl.question(quest.sport, (answer6) => {
                    console.log(`${answer6} - very exciting`);
                    answers.sport = answer6;
                    rl.question(quest.superpower, (answer7) => {
                        console.log(`Good to know that ${answer7} is your superpower`);
                        answers.superpower = answer7;
console.log(    `Hi! My name is ${answers.name}. 
My favorite activity is ${answers.activity}. 
And I love to eat ${answers.food} at ${answers.meal}. 
I like ${answers.sport} and ${answers.music }! My superpower is ${answers.superpower}`);
  rl.close();
});
});
});
});
});
});
});