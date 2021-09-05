function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function changeTheme() {
   if (localStorage.getItem('theme') === 'theme-1'){
       setTheme('theme-2');
   } else if (localStorage.getItem('theme') === 'theme-2'){
    setTheme('theme-3');
   }else if (localStorage.getItem('theme') === 'theme-3'){
    setTheme('theme-4');
   } else if (localStorage.getItem('theme') === 'theme-4'){
    setTheme('theme-1');
   } else {
       setTheme('theme-1');
   }
}

if (localStorage.getItem('theme') === 'theme-1'){
    setTheme('theme-1');
} else if (localStorage.getItem('theme') === 'theme-2'){
    setTheme('theme-2');
} else if (localStorage.getItem('theme') === 'theme-3'){
    setTheme('theme-3');
} else if (localStorage.getItem('theme') === 'theme-4'){
    setTheme('theme-4');
} else {
    setTheme('theme-1');
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