//Various functions to use when handling HTTP Cookies

function setCookie(cookieName, cookieValue, expireDays) {
    let expires = "";

    if (expireDays) {
        const today = new Date();
        today.setTime(today.getTime() + (expireDays * 24 * 60 * 60 * 1000)); // Convert days to milliseconds
        expires = "; expires=" + today.toUTCString();
    }

    document.cookie = cookieName + "=" + encodeURIComponent(cookieValue) + expires;
    //located at: https://www.mbloging.com/post/how-to-read-write-and-delete-cookies-in-javascript
}//end setCookie()

function getCookieValue(name) {
    const cookies = document.cookie.split(';');

    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        
        if (cookieName === name) {
        return decodeURIComponent(cookieValue);
        }
    }

    return null; // Cookie not found
}//end getCookieValue()

//Need a Delete Cookie function