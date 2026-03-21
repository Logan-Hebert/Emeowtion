const happy = ["Look at you! You got this!", "You chose to be happy today, and it looks good on you.", "Your smile will change the world, don't forget that!"]; 
const mid = ["Some things are hard, but all that matters is making the most of it", "You release what you cannot control", "Life is what you make it, don't let anyone dim that"];
const sad = ["You are not the bad feelings, you're just going through the storm", "You are enough just as you are", "You survived all your bad days so far, so keep going"];

 function getRandomHappy() {
    
     const rand = Math.floor(Math.random() * happy.length);
    let arr = happy[rand];
     return arr;
 }

// console.log(getRandomHappy()); 

function getRandomMid() {

    const rand = Math.floor(Math.random() *  mid.length);
    let arr = mid[rand]; 
    return arr;
}

//console.log(getRandomMid()); 

function getRandomSad() {

    const rand = Math.floor(Math.random() *  sad.length);
    let arr = sad[rand]; 
    return arr;
}

//console.log(getRandomSad() + "\n"); 


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let button1 = "happy"; 
let button2 = "happy"; 
let button3 = "mid"; 
let button4 = "sad"; 
let button5 = "sad"; 

console.log("hello"); 
rl.question("How are you feeling? ", (mood) => {

 if (mood === button1 || mood === button2) {
     console.log(getRandomHappy()); 
 }
 else if (mood === button3) {
     console.log(getRandomMid()); 
 }
 else if (mood === button4 || mood === button5) {
     console.log(getRandomSad()); 
 }

  rl.close();
});
