const polarMoonHomeButton = document.getElementById("polarMoonHomeButton");
const polarMoonFAQButton = document.getElementById("polarMoonFAQButton");
const polarMoonGamesButton = document.getElementById("polarMoonGamesButton");

document.addEventListener("click", function(event) {
    if (event.target.id == "polarMoonHomeButton") {
        window.location.href = "index.html";
    } else if (event.target.id == "polarMoonFAQButton") {
        window.location.href = "faq.html";
    } else if (event.target.id == "polarMoonGamesButton") {
        window.location.href = "games.html";
    }
});