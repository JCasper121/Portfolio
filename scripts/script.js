var darkMode = function() {

    var sheetLink = $("#darkmode-css")

    if(sheetLink.attr("href")) {
        sheetLink.removeAttr("href");
        localStorage.setItem("darkmode_portfolio", "false");
    } else {
        sheetLink.attr("href", "darkmode.css");
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
    $("#darkmode-button").click(darkMode);

}