// This will run for every page

console.log(navigator.cookieEnabled);

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
};

function getCookie(name) {
    const cName = `${name}=`;
    const cookie = decodeURIComponent(document.cookie);
    const cookieArr = cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
        let c = cookieArr[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cName) == 0) {
            return c.substring(cName.length, c.length);
        }
    }
    return "";
    console.log(cName);
}

function deleteCookie(name) {
    setCookie(name, null, null);
}

setCookie("test", "Hello World!", 1);

getCookie("test");
getCookie("favoritePet");