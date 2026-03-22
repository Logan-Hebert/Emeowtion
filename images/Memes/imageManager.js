//not using node.js, so need to put file nums manually since cant directly read files from folders.
//THIS IS FOR MEME IMAGES ONLY
let catMemeNum, dogMemeNum, horseMemeNum, fishMemeNum, pandaMemeNum, totalMemeNum;
const sadCatNum =  2;
const sadDogNum = 1;
const sadHorseNum = 1;
const sadFishNum = 1;
const sadPandaNum = 1;

const happyCatNum = 1;
const happyDogNum = 1;
const happyHorseNum = 1;
const happyFishNum = 1;
const happyPandaNum = 1;

import sadCat1 from "./sadCat1.jpg";
import sadCat2 from "./sadCat2.jpg";
import happyCat1 from "./happyCat1.jpg";
import sadDog1 from "./sadDog1.jpg";
import happyDog1 from "./happyDog1.jpg";
import sadHorse1 from "./sadHorse1.jpg";
import happyHorse1 from "./happyHorse1.jpg";
import sadFish1 from "./sadFish1.jpg";
import happyFish1 from "./happyFish1.jpg";
import sadPanda1 from "./sadPanda1.jpg";
import happyPanda1 from "./happyPanda1.jpg";

const memeImages = [sadCat1, sadCat2, happyCat1, sadDog1, happyDog1, sadHorse1, happyHorse1, sadFish1, happyFish1, sadPanda1, happyPanda1];

catMemeNum = sadCatNum + happyCatNum;
dogMemeNum = sadDogNum + happyDogNum;
horseMemeNum = sadHorseNum + happyHorseNum;
fishMemeNum = sadFishNum + happyFishNum;
pandaMemeNum = sadPandaNum + happyPandaNum;

totalMemeNum = catMemeNum + dogMemeNum + horseMemeNum + fishMemeNum + pandaMemeNum;

export { sadCatNum, sadDogNum, sadFishNum, sadHorseNum, sadPandaNum,
    happyCatNum, happyDogNum, happyFishNum, happyHorseNum, happyPandaNum,
    catMemeNum, dogMemeNum, horseMemeNum, fishMemeNum, pandaMemeNum,
    totalMemeNum,
};