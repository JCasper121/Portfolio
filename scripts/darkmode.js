var darkMode = function() {

    var sheetLink = $("#darkmode-css");
    var tooltipText = $("#darkmode-tooltip");

    if(sheetLink.attr("href")) {
        console.log(tooltipText);
        sheetLink.removeAttr("href");
        tooltipText.innerText = "Light";
        tooltipText.innerHTML = "Light";
        tooltipText.innerContent = "Light";
        localStorage.setItem("darkmode_portfolio", "false");
    } else {
        sheetLink.attr("href", "darkmode.css");
        tooltipText.innerText = "Dark";
        tooltipText.innerHTML = "Dark";
        tooltipText.innerContent = "Dark";
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