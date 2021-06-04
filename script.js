var darkMode = function() {
    var sheetLink = document.getElementById("darkmode-css");
    if(sheetLink.hasAttribute("href")) {
        sheetLink.removeAttribute("href");
        localStorage.setItem("darkmode_portfolio", "false");
    } else {
        sheetLink.setAttribute("href", "darkmode.css");
        localStorage.setItem("darkmode_portfolio", "true");
    }
}

var checkDarkMode = function() {
    var sheetLink = document.getElementById("darkmode-css");
    if(localStorage.getItem("darkmode_portfolio") == "true") {
        sheetLink.setAttribute("href", "darkmode.css");
        console.log("Darkmode checked");
    }
}



window.onload = function() {
    checkDarkMode();
    var darkmode_button = document.getElementById("darkmode-button");
    darkmode_button.onclick = darkMode

}