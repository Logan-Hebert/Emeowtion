const happy = ["'Happiness depends upon ourselves.' ― Aristotle", "'The best thing about the future is that it comes one day at a time.' — Abraham Lincoln", "'Happiness is not something ready made. It comes from your own actions.' ― Dalai Lama" ]; 


const mid = ["'Whatever you decide to do make sure it makes you happy.' ― Paulo Coelho", "'If you want to live a happy life, tie it to a goal, not to people or things.' ― Albert Einstein", "'Learn to let go. That is the key to happiness.' ― Buddha"];


const sad = ["'Don’t cry because it’s over, smile because it happened.' ― Dr. Seuss", "'Happiness is a journey, not a destination.' ― Ben Sweetland", "'Action may not always bring happiness; but there is no happiness without action.' ― Benjamin Disraeli"];

function getRandomHappy() {
    
     const rand = Math.floor(Math.random() * happy.length);
    let arr = happy[rand];
     return arr;
 }

 document.getElementById("happy").innerHTML = getRandomHappy();
 console.log(getRandomHappy()); 

function getRandomMid() {

    const rand = Math.floor(Math.random() *  mid.length);
    let arr = mid[rand]; 
    return arr;
}

document.getElementById("mid").innerHTML = getRandomMid();
console.log(getRandomMid()); 

function getRandomSad() {

    const rand = Math.floor(Math.random() *  sad.length);
    let arr = sad[rand]; 
    return arr;
}

document.getElementById("sad").innerHTML = getRandomSad();
console.log(getRandomSad() + "\n"); 


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
