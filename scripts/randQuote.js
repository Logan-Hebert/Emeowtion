const happy = ["Look at you! You got this!", "You chose to be happy today, and it looks good on you.", "Your smile will change the world, don't forget that!"]; 
const happyAuthors = ["- Anonymous", "- Anonymous", "- Anonymous"];
const mid = ["Some things are hard, but all that matters is making the most of it", "You release what you cannot control", "Life is what you make it, don't let anyone dim that"];
const midAuthors = ["- Anonymous", "- Anonymous", "- Anonymous"];
const sad = ["You are not the bad feelings, you're just going through the storm", "You are enough just as you are", "You survived all your bad days so far, so keep going"];
const sadAuthors = ["- Anonymous", "- Anonymous", "- Anonymous"];
 function getRandomHappy() {
    
     const rand = Math.floor(Math.random() * happy.length);
    let arr = happy[rand];
     return arr, happyAuthors[rand];
 }

// console.log(getRandomHappy()); 

function getRandomMid() {

    const rand = Math.floor(Math.random() *  mid.length);
    let arr = mid[rand]; 
    return arr, midAuthors[rand];
}

//console.log(getRandomMid()); 

function getRandomSad() {

    const rand = Math.floor(Math.random() *  sad.length);
    let arr = sad[rand]; 
    return arr, sadAuthors[rand];
}