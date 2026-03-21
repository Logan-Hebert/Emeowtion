import { sadCatNum, sadDogNum, sadFishNum, sadHorseNum, sadPandaNum,
    happyCatNum, happyDogNum, happyFishNum, happyHorseNum, happyPandaNum,
} from "../images/Memes/imageManager.js";
let moodAnimal = "cat"; 
const joyMeter= 1;
let randOption, joyType;
// import { getAnimalType } from "./index.js";
//import { getJoyMeter } from "./index.js";
//joyMeter = getJoyMeter();
// moodAnimal = getAnimalType();


function getRandOption(min, max) {
    rNum= Math.floor(Math.random() * (max - min + 1)) + min;
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
}

function displayMeme(moodAnimal, joyType, randOption){
    // document.getElementById("animal-type").innerHTML = moodAnimal;
    document.getElementById("joy-meter").innerHTML = joyType;
    document.getElementById("image-num").innerHTML = randOption;
}

displayMeme(moodAnimal, joyType, randOption);
  



















//for inputing files
// //document.getElementById("animal-type").innerHTML = animal;
//   document.getElementById('folderInput').addEventListener('change', (event) => {
//     const files = event.target.files;
//     const countElement = document.getElementById('fileCount');
//     countElement.textContent = `${files.length} files selected`;
//   });



