'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        switcher.textContent = "Dark";
    } else if (className == "dark-theme") {
        switcher.textContent = "Light";
    }

    console.log('current class: ' + className);
});