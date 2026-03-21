//not using node.js, so need to put file nums manually since cant directly read files from folders.
const catMemeNum = 1;
const dogMemeNum = 0;
const horseMemeNum = 0;
const fishMemeNum = 0;
const pandaMemeNum = 0;
//THIS IS FOR THE MEMES IMAGES ONLY
const sadCatNum = 1;
const sadDogNum = 0;
const sadHorseNum = 0;
const sadFishNum = 0;
const sadPandaNum = 0;

const happyCatNum = 0;
const happyDogNum = 0;
const happyHorseNum = 0;
const happyFishNum = 0;
const happyPandaNum = 0;

catMemeNum = sadCatNum + happyCatNum;
dogMemeNum = sadDogNum + happyDogNum;
horseMemeNum = sadHorseNum + happyHorseNum;
fishMemeNum = sadFishNum + happyFishNum;
pandaMemeNum = sadPandaNum + happyPandaNum;

totalMemeNum = catMemeNum + dogMemeNum + horseMemeNum + fishMemeNum + pandaMemeNum;
