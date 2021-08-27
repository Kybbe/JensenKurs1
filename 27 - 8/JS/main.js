function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function toggleTheme() {
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