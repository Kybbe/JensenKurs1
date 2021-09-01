function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function changeTheme() {
   if (localStorage.getItem('theme') === 'theme-1'){
       setTheme('theme-2');
   } else if (localStorage.getItem('theme') === 'theme-2'){
    setTheme('theme-3');
   } else if (localStorage.getItem('theme') === 'theme-3'){
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
} else {
    setTheme('theme-1');
}

/*
function changeSite(site) {    
    var str = window.location.href;
    var n = str.lastIndexOf('/');
    var result = str.substring(0, n + 1); 
    window.location.href = result + site + ".html";
}
*/

$('body').on('click', function(e) {   
    if ( (e.target.id == "bannerIMG") || (e.target.id == "banner") ) {
        changeTheme();
    }

    if (e.target !== this) {
        return;
    }

    changeTheme();
});