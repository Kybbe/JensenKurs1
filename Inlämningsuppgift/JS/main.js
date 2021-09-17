var includes = $('[data-include]')
  $.each(includes, function () {
    var file = './dependencies/' + $(this).data('include') + '.html'
    $(this).load(file)
  })

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

themeIcons = ['<i class="far fa-sun"></i>', '<i class="fas fa-moon"></i>', '<i class="fab fa-raspberry-pi"></i>', '<i class="fas fa-newspaper"></i>', '<i class="fas fa-gifts"></i>']

const NumberOfThemes = 5;
function changeTheme() {
    for(i = 0; i <= NumberOfThemes; i++) {
        if (localStorage.getItem('theme') === ('theme-' + i)){ //if theme is theme-2 for example
            if(i == NumberOfThemes) { // Check if last theme
                setTheme('theme-1'); // if so, wrap around to first theme again

                $("#themeChanger").html(themeIcons[0]);
                
                break;
            }
            setTheme('theme-' + (i + 1)); // If not, change to next theme

            $("#themeChanger").html(themeIcons[i]);
            
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

$(".flippableCard").mousedown( function() {
    card = $(this);

    if (card.className == "card flippedCard") {
        $(card).removeClass("flippedCard")
    } else {
        $(card).addClass("flippedCard");
    }
})



function openNavbar() {
    if ($("#navbar")[0].className == "openedNavbar") {
        $("#navbar").removeClass("openedNavbar");
    } else {
        $("#navbar").addClass("openedNavbar");
    }
}