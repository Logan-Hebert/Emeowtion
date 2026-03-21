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



getCookie("test");
getCookie("favoritePet");