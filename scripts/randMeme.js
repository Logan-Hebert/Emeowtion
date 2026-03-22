import { sadCatNum, sadDogNum, sadFishNum, sadHorseNum, sadPandaNum,
    happyCatNum, happyDogNum, happyFishNum, happyHorseNum, happyPandaNum,
    midCatNum, midDogNum, midFishNum, midHorseNum, midPandaNum
} from "../images/Memes/imageManager.js";

let moodAnimal = getCookie("favoritePet");
let mood_history = JSON.parse(getCookie("moodHistory")) || [];
let joyMeter = mood_history[mood_history.length - 1].mood;
let zOpt, joyType;


//Gets a random num between 1 and max (inclusive)
function getRandOption(max) {
    return (Math.floor(Math.random() * (max)) + 1);
}
//Picks a random option number based on the animal and joy level, then displays the corresponding meme.
function optionPicker() {
    let randOption;
    if (moodAnimal == "cat"){
        if (joyMeter <= 2){
            randOption = getRandOption(sadCatNum);
        } else if(joyMeter == 3){
            randOption = getRandOption(midCatNum);
        } else {
            randOption = getRandOption(happyCatNum);
        } 
    } else if (moodAnimal == "dog"){
        if (joyMeter <= 2){
            randOption = getRandOption(sadDogNum);
        } else if(joyMeter == 3){
            randOption = getRandOption(midDogNum);
        } else {    
            randOption = getRandOption(happyDogNum);
        }
    } else if (moodAnimal == "horse"){
        if (joyMeter <= 2){
            randOption = getRandOption(sadHorseNum);
        } else if(joyMeter == 3){
            randOption = getRandOption(midHorseNum);
        } else {
            randOption = getRandOption(happyHorseNum);
        }
    } else if (moodAnimal == "fish"){
        if (joyMeter <= 2){
            randOption = getRandOption(sadFishNum);
        } else if(joyMeter == 3){
            randOption = getRandOption(midFishNum);
        } else {
            randOption = getRandOption(happyFishNum);
        }
    } else if (moodAnimal == "panda"){
        if (joyMeter <= 2){
            randOption = getRandOption(sadPandaNum);
        } else if(joyMeter == 3){
            randOption = getRandOption(midPandaNum);
        } else {
            randOption = getRandOption(happyPandaNum);
        }
}
return randOption;
}

function displayMeme(moodAnimal, joyType, option){
    // document.getElementById("animal-type").innerHTML = moodAnimal;
    // document.getElementById("joy-meter").innerHTML = joyType;
    // document.getElementById("image-num").innerHTML = randOption;
    console.log(option);
    document.getElementById('meme-image').src = `images/Memes/${moodAnimal}/${joyType}${moodAnimal}${option}.jpg`;
}

if  (joyMeter <= 2){
    joyType = "badDay/sad";
  } else if (joyMeter == 3){
    joyType = "mehDay/meh";
  } else {
    joyType = "goodDay/happy";
  }
zOpt = optionPicker();
displayMeme(moodAnimal, joyType, zOpt);


  






















