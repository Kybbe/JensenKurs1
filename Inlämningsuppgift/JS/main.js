function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

const NumberOfThemes = 5;
function changeTheme() {
    for(i = 0; i <= NumberOfThemes; i++) {
        if (localStorage.getItem('theme') === ('theme-' + i)){ //if theme is theme-2 for example
            if(i == NumberOfThemes) { // Check if last theme
                setTheme('theme-1'); // if so, wrap around to first theme again
                break;
            }
            setTheme('theme-' + (i + 1)); // If not, change to next theme
            break;
        }
    }
}

selectedTheme = localStorage.getItem('theme')
if(selectedTheme == null || selectedTheme == undefined){
    setTheme('theme-1')
} else {
    setTheme(localStorage.getItem('theme'))
}

$('body').on('click', function(e) {   
    if ( (e.target.id == "bannerIMG") || (e.target.id == "banner") ) {
        changeTheme();
    }

    if (e.target !== this) {
        return;
    }

    changeTheme();
});

function flipCard(card) {
    if (card.className == "card flippedCard") {
        $(card).removeClass("flippedCard")
    } else {
        $(card).addClass("flippedCard");
    }
}

function openNavbar() {
    if ($("#navbar")[0].className == "openedNavbar") {
        $("#navbar").removeClass("openedNavbar");
    } else {
        $("#navbar").addClass("openedNavbar");
    }
}