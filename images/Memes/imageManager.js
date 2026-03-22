//not using node.js, so need to put file nums manually since cant directly read files from folders.
//THIS IS FOR MEME IMAGES ONLY
let catMemeNum, dogMemeNum, horseMemeNum, fishMemeNum, pandaMemeNum, totalMemeNum;
const sadCatNum =  5;
const sadDogNum = 5;
const sadHorseNum = 5;
const sadFishNum = 5;
const sadPandaNum = 5;

const happyCatNum = 5;
const happyDogNum = 5;
const happyHorseNum = 5;
const happyFishNum = 5;
const happyPandaNum = 5;

const mehCatNum = 5;
const mehDogNum = 5;
const mehHorseNum = 5;
const mehFishNum = 5;
const mehPandaNum = 5;

import sadCat1 from "./sadCat1.jpg";
import sadCat2 from "./sadCat2.jpg";
import sadCat3 from "./sadCat3.jpg";
import sadCat4 from "./sadCat4.jpg";
import sadCat5 from "./sadCat5.jpg";
import happyCat1 from "./happyCat1.jpg";
import happyCat2 from "./happyCat2.jpg";
import happyCat3 from "./happyCat3.jpg";
import happyCat4 from "./happyCat4.jpg";
import happyCat5 from "./happyCat5.jpg";
import mehCat1 from "./mehCat1.jpg";
import mehCat2 from "./mehCat2.jpg";
import mehCat3 from "./mehCat3.jpg";
import mehCat4 from "./mehCat4.jpg";
import mehCat5 from "./mehCat5.jpg";
import sadDog1 from "./sadDog1.jpg";        
import sadDog2 from "./sadDog2.jpg";
import sadDog3 from "./sadDog3.jpg";
import sadDog4 from "./sadDog4.jpg";
import sadDog5 from "./sadDog5.jpg";
import happyDog1 from "./happyDog1.jpg";
import happyDog2 from "./happyDog2.jpg";
import happyDog3 from "./happyDog3.jpg";
import happyDog4 from "./happyDog4.jpg";
import happyDog5 from "./happyDog5.jpg";
import mehDog1 from "./mehDog1.jpg";
import mehDog2 from "./mehDog2.jpg";
import mehDog3 from "./mehDog3.jpg";
import mehDog4 from "./mehDog4.jpg";
import mehDog5 from "./mehDog5.jpg";
import sadHorse1 from "./sadHorse1.jpg";
import sadHorse2 from "./sadHorse2.jpg";
import sadHorse3 from "./sadHorse3.jpg";
import sadHorse4 from "./sadHorse4.jpg";
import sadHorse5 from "./sadHorse5.jpg";
import happyHorse1 from "./happyHorse1.jpg";
import happyHorse2 from "./happyHorse2.jpg";
import happyHorse3 from "./happyHorse3.jpg";
import happyHorse4 from "./happyHorse4.jpg";
import happyHorse5 from "./happyHorse5.jpg";
import mehHorse1 from "./mehHorse1.jpg";
import mehHorse2 from "./mehHorse2.jpg";
import mehHorse3 from "./mehHorse3.jpg";
import mehHorse4 from "./mehHorse4.jpg";
import mehHorse5 from "./mehHorse5.jpg";
import sadFish1 from "./sadFish1.jpg";
import sadFish2 from "./sadFish2.jpg";
import sadFish3 from "./sadFish3.jpg";
import sadFish4 from "./sadFish4.jpg";
import sadFish5 from "./sadFish5.jpg";
import happyFish1 from "./happyFish1.jpg";
import happyFish2 from "./happyFish2.jpg";
import happyFish3 from "./happyFish3.jpg";
import happyFish4 from "./happyFish4.jpg";
import happyFish5 from "./happyFish5.jpg";
import mehFish1 from "./mehFish1.jpg";
import mehFish2 from "./mehFish2.jpg";
import mehFish3 from "./mehFish3.jpg";
import mehFish4 from "./mehFish4.jpg";
import mehFish5 from "./mehFish5.jpg";
import sadPanda1 from "./sadPanda1.jpg";
import sadPanda2 from "./sadPanda2.jpg";
import sadPanda3 from "./sadPanda3.jpg";
import sadPanda4 from "./sadPanda4.jpg";
import sadPanda5 from "./sadPanda5.jpg";
import happyPanda1 from "./happyPanda1.jpg";
import happyPanda2 from "./happyPanda2.jpg";
import happyPanda3 from "./happyPanda3.jpg";
import happyPanda4 from "./happyPanda4.jpg";
import happyPanda5 from "./happyPanda5.jpg";
import mehPanda1 from "./mehPanda1.jpg";
import mehPanda2 from "./mehPanda2.jpg";
import mehPanda3 from "./mehPanda3.jpg";
import mehPanda4 from "./mehPanda4.jpg";
import mehPanda5 from "./mehPanda5.jpg";

const memeImages = [sadCat1, sadCat2, sadCat3, sadCat4, sadCat5,
                    mehCat1, mehCat2, mehCat3, mehCat4, mehCat5,
                    happyCat1, happyCat2, happyCat3, happyCat4, happyCat5,
                    sadDog1, sadDog2, sadDog3, sadDog4, sadDog5,
                    mehDog1, mehDog2, mehDog3, mehDog4, mehDog5,
                    happyDog1, happyDog2, happyDog3, happyDog4, happyDog5,
                    sadHorse1, sadHorse2, sadHorse3, sadHorse4, sadHorse5,
                    mehHorse1, mehHorse2, mehHorse3, mehHorse4, mehHorse5,
                    happyHorse1, happyHorse2, happyHorse3, happyHorse4, happyHorse5,
                    sadFish1, sadFish2, sadFish3, sadFish4, sadFish5,
                    mehFish1, mehFish2, mehFish3, mehFish4, mehFish5,
                    happyFish1, happyFish2, happyFish3, happyFish4, happyFish5,
                    sadPanda1, sadPanda2, sadPanda3, sadPanda4, sadPanda5,
                    mehPanda1, mehPanda2, mehPanda3, mehPanda4, mehPanda5,
                    happyPanda1, happyPanda2, happyPanda3, happyPanda4, happyPanda5];
export default memeImages;

catMemeNum = sadCatNum + mehCatNum + happyCatNum;
dogMemeNum = sadDogNum + mehDogNum + happyDogNum;
horseMemeNum = sadHorseNum + mehHorseNum + happyHorseNum;
fishMemeNum = sadFishNum + mehFishNum + happyFishNum;
pandaMemeNum = sadPandaNum + mehPandaNum + happyPandaNum;

totalMemeNum = catMemeNum + dogMemeNum + horseMemeNum + fishMemeNum + pandaMemeNum;

export { sadCatNum, sadDogNum, sadFishNum, sadHorseNum, sadPandaNum, mehCatNum, mehDogNum, mehFishNum, mehHorseNum, mehPandaNum,
    happyCatNum, happyDogNum, happyFishNum, happyHorseNum, happyPandaNum,
    catMemeNum, dogMemeNum, horseMemeNum, fishMemeNum, pandaMemeNum,
    totalMemeNum,
};