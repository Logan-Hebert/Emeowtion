// This will run for every page

console.log(navigator.cookieEnabled);

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
};

function getCookie(name) {
    const cookie = decodeURIComponent(document.cookie);
    console.log(cookie);
}

function deleteCookie(name) {
    setCookie(name, null, null);
}

setCookie("test", "Hello World!", 1);
setCookie("favoritePet", "cat", 365);
setCookie("moodDay1", "neutral", 30);
setCookie("moodDay2", "happy", 30);
setCookie("moodDay3", "sad", 30);
setCookie("moodDay4", "very sad", 30);
setCookie("moodDay5", "very happy", 30);
setCookie("moodDay6", "neutral", 30);
setCookie("moodDay7", "happy", 30);
setCookie("moodDay8", "sad", 30);
setCookie("moodDay9", "very sad", 30);
setCookie("moodDay10", "very happy", 30);
setCookie("moodDay11", "neutral", 30);
setCookie("moodDay12", "happy", 30);
setCookie("moodDay13", "sad", 30);
setCookie("moodDay14", "very sad", 30);
setCookie("moodDay15", "very happy", 30);
setCookie("moodDay16", "neutral", 30);
setCookie("moodDay17", "happy", 30);
setCookie("moodDay18", "sad", 30);
setCookie("moodDay19", "very sad", 30);
setCookie("moodDay20", "very happy", 30);
setCookie("moodDay21", "neutral", 30);
setCookie("moodDay22", "happy", 30);
setCookie("moodDay23", "sad", 30);
setCookie("moodDay24", "very sad", 30);
setCookie("moodDay25", "very happy", 30);
setCookie("moodDay26", "neutral", 30);
setCookie("moodDay27", "happy", 30);
setCookie("moodDay28", "sad", 30);
setCookie("moodDay29", "very sad", 30);
setCookie("moodDay30", "very happy", 30);



getCookie("test");
getCookie("favoritePet");
getCookie("moodDay1");
getCookie("moodDay2");
getCookie("moodDay3");
getCookie("moodDay4");
getCookie("moodDay5");
getCookie("moodDay6");
getCookie("moodDay7");
getCookie("moodDay8");
getCookie("moodDay9");
getCookie("moodDay10");
getCookie("moodDay11");
getCookie("moodDay12");
getCookie("moodDay13");
getCookie("moodDay14");
getCookie("moodDay15");
getCookie("moodDay16");
getCookie("moodDay17");
getCookie("moodDay18");
getCookie("moodDay19");
getCookie("moodDay20");
getCookie("moodDay21");
getCookie("moodDay22");
getCookie("moodDay23");
getCookie("moodDay24");
getCookie("moodDay25");
getCookie("moodDay26");
getCookie("moodDay27");
getCookie("moodDay28");
getCookie("moodDay29");
getCookie("moodDay30");