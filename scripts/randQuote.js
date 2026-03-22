const MooHis = JSON.parse(getCookie("moodHistory")) || [];
let joyLevel = MooHis[MooHis.length - 1].mood;
console.log(joyLevel);

const happy = ["\"Happiness depends upon ourselves.\"", "\"The best thing about the future is that it comes one day at a time.\"", 
     "\"Happiness is not something ready made. It comes from your own actions.\""]; 
const happyAuthors = ["Aristotle", "Abraham Lincoln", "Dalai Lama"];
const mid = ["\"Whatever you decide to do make sure it makes you happy.\"", 
    "\"If you want to live a happy life, tie it to a goal, not to people or things.\"", 
    "\"Learn to let go. That is the key to happiness.\""];
const midAuthors = ["Paulo Coelho", "Albert Einstein", "Buddha"];
const sad = ["\"Don’t cry because it’s over, smile because it happened.\"", "\"Happiness is a journey, not a destination.\"", 
     "\"Action may not always bring happiness; but there is no happiness without action.\""];
const sadAuthors = ["Dr. Seuss", "Ben Sweetland", "Benjamin Disraeli"];




function getRandomHappy() {
    
    const rand = Math.floor(Math.random() * happy.length);
    let arr = happy[rand];
    return [arr, happyAuthors[rand]];
 }

function getRandomMid() {

    const rand = Math.floor(Math.random() *  mid.length);
    let arr = mid[rand]; 
    return [arr, midAuthors[rand]];
}
function getRandomSad() {

    const rand = Math.floor(Math.random() *  sad.length);
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
