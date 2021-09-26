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

$(".flippableCard").mousedown( function(e) {
    if(e.target.className == "cardBodyButton") {
        return;
    }
    card = $(this);

    if ($(card).attr('class') == "card flippableCard flippedCard") {
        $(card).removeClass("flippedCard")
        $(card).children().children(".flip-card-back").show(1).delay(500).hide(1);
    } else {
        $(card).addClass("flippedCard");
        $(card).children().children(".flip-card-back").hide(1).delay(500).show(1);
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
    var resultDiv = document.getElementById("result");
    var select = document.getElementById("boatClass");
    var checkbox = document.getElementById("terms");
    var result = "";
    var invalid = "";
    var allValid = true;

    for(inputThingy of inputs) { // get all inputs
        if(inputThingy.id == "terms") {
            result += "Has read Privacy policy:" + " " + inputThingy.value + " \r\n";
        } else if(inputThingy.value == "Get values") {

        } else {
            result += inputThingy.attr('placeholder') + " " + inputThingy.value + " \r\n"; //set result as a alert friendly formed list
        }
        if(!inputThingy.checkValidity()) {
            allValid = false;
            inputThingy.style.backgroundColor = "red";
            inputThingy.style.color = "white";

            if(invalid == "") {
                invalid += inputThingy.attr('placeholder');
            } else {
                invalid += ", \r\n " + inputThingy.attr('placeholder')
            }
        }
    }
    result += $('label[for="' + select.id + '"]').html() + select.value + " \r\n";
    if(!checkbox.checked){
        allValid = false;

        if(invalid == "") {
            invalid += checkbox.id;
        } else {
            invalid += ", \r\n" + checkbox.id
        }
    }

    if(allValid == true) {
        if (window.confirm(result + " \r\n" + "Click 'ok' if all info above looks right.")) {// visar alla inputs och frågar användaren om dom vill se svaret på hemsidan också
            resultDiv.innerHTML = "Form sent successfully!"; // skriv ut svaret i div "result"
            resultDiv.style.color = "green";

            for(inputThingy of inputs) {
                inputThingy.backgroundColor = "unset"
            }
        };
    } else {
        alert("Please fill in the following fields correctly: \r\n" + invalid)
        resultDiv.innerHTML = "Form not fully filled out or valid.";
        resultDiv.style.color = "red";
    }

}

