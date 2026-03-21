import { sadCatNum, sadDogNum, sadFishNum, sadHorseNum, sadPandaNum,
    happyCatNum, happyDogNum, happyFishNum, happyHorseNum, happyPandaNum,
} from "../images/Memes/imageManager.js";
let moodAnimal = "cat"; 
let joyMeter= 1;
let zOpt, joyType;
// import { getAnimalType } from "./index.js";
//import { getJoyMeter } from "./index.js";
//joyMeter = getJoyMeter();
// moodAnimal = getAnimalType();

function getRandOption(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function optionPicker() {
    let randOption;
    if (moodAnimal == "cat"){
        if (joyMeter <= 2){
            randOption = getRandOption(1, sadCatNum);
        } else {
            randOption = getRandOption(1, happyCatNum);
        } 
    } else if (moodAnimal == "dog"){
        if (joyMeter <= 2){
            randOption = getRandOption(1, sadDogNum);
        } else{
            randOption = getRandOption(1, happyDogNum);
        }
    } else if (moodAnimal == "horse"){
        if (joyMeter <= 2){
            randOption = getRandOption(1, sadHorseNum);
        } else {
            randOption = getRandOption(1, happyHorseNum);
        }
    } else if (moodAnimal == "fish"){
        if (joyMeter <= 2){
            randOption = getRandOption(1, sadFishNum);
        } else {
            randOption = getRandOption(1, happyFishNum);
        }
    } else if (moodAnimal == "panda"){
        if (joyMeter <= 2){
            randOption = getRandOption(1, sadPandaNum);
        } else {
            randOption = getRandOption(1, happyPandaNum);
        }
}
return randOption;
}

function displayMeme(moodAnimal, joyType, option){
    // document.getElementById("animal-type").innerHTML = moodAnimal;
    // document.getElementById("joy-meter").innerHTML = joyType;
    // document.getElementById("image-num").innerHTML = randOption;
    document.getElementById('meme-image').src = `images/Memes/${moodAnimal}/${joyType}${moodAnimal}${option}.jpg`;
}

if  (joyMeter <= 2){
    joyType = "badDay/sad";
  } else {
    joyType = "goodNMehDay/happy";
  }
zOpt = getRandOption(1, sadCatNum);
displayMeme(moodAnimal, joyType, zOpt);
  



















//for inputing files
// //document.getElementById("animal-type").innerHTML = animal;
//   document.getElementById('folderInput').addEventListener('change', (event) => {
//     const files = event.target.files;
//     const countElement = document.getElementById('fileCount');
//     countElement.textContent = `${files.length} files selected`;
//   });



