var includes = $('[data-include]')
  $.each(includes, function () {
    var file = './dependencies/' + $(this).data('include') + '.html'
    $(this).load(file)
  })

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function changeTheme() {
    themeIcons = ['<i class="far fa-sun"></i>', '<i class="fas fa-moon"></i>', '<i class="fab fa-raspberry-pi"></i>', '<i class="fas fa-newspaper"></i>', '<i class="fas fa-gifts"></i>']
    const NumberOfThemes = 5;
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

function submitResult() {
    var form = document.getElementById("contactForm");
    var inputs = form.getElementsByTagName("input");
    var resultDiv = document.getElementById("result")
    var result = "";
    var allValid = true;

    for(inputThingy of inputs) { // get all inputs
        result += inputThingy.id + ": " + inputThingy.value + " \r\n"; //set result as a alert friendly formed list
        if(!inputThingy.checkValidity()) {
            allValid = false;
        }
    }

    if(allValid == true) {
        if (window.confirm(result + " \r\n" + "Click 'ok' if all info above looks right.")) {// visar alla inputs och frågar användaren om dom vill se svaret på hemsidan också
            resultDiv.innerHTML = "Form sent successfully!"; // skriv ut svaret i div "result"
            resultDiv.style.color = "green";
        };
    } else {
        resultDiv.innerHTML = "Form not fully filled out or valid.";
        resultDiv.style.color = "red";
    }

    
    
}

