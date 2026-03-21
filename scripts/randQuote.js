// import { getJoyMeter(); } from "./index.js";
let joyLevel = 1;
// joyLevel = getJoyMeter();


const happy = ["Look at you! You got this!", "You chose to be happy today, and it looks good on you.", "Your smile will change the world, don't forget that!"]; 
const happyAuthors = ["- Anonymous", "- Anonymous", "- Anonymous"];
const mid = ["Some things are hard, but all that matters is making the most of it", "You release what you cannot control", "Life is what you make it, don't let anyone dim that"];
const midAuthors = ["- Anonymous", "- Anonymous", "- Anonymous"];
const sad = ["You are not the bad feelings, you're just going through the storm", "You are enough just as you are", "You survived all your bad days so far, so keep going"];
const sadAuthors = ["- Anonymous", "- Anonymous", "- Anonymous"];
 function getRandomHappy(min=0, max=happy.length-1) {
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    let arr = happy[rand];
     return [arr, happyAuthors[rand]];
 }

// console.log(getRandomHappy()); 

function getRandomMid(min=0, max=mid.length-1) {

    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    let arr = mid[rand]; 
    return [arr, midAuthors[rand]];
}

//console.log(getRandomMid()); 

function getRandomSad(min=0, max=sad.length-1) {

    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    let arr = sad[rand]; 
    return [arr, sadAuthors[rand]];
}

if (joyLevel <= 2){
    const randSad = getRandomSad();
    document.getElementById("quote-full").innerHTML = randSad[0];
    document.getElementById("quote-author").innerHTML = randSad[1];
} else if (joyLevel == 3){
    const randMid = getRandomMid();
    document.getElementById("quote-full").innerHTML = randMid[0];
    document.getElementById("quote-author").innerHTML = randMid[1];
} else {
    const randHappy = getRandomHappy();
    document.getElementById("quote-full").innerHTML = randHappy[0];
    document.getElementById("quote-author").innerHTML = randHappy[1];
}
