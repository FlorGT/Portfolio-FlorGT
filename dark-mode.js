console.log ('JS loaded');

function toggleDarkMode(){
    let body= document.getElementById('app');
    body.classList.toggle('-dark');
}

function app(){
    
    let DarkModeButton = document.getElementById ('dark-mode');
    DarkModeButton.addEventListener('click', toggleDarkMode);

    console.log ('DarkModeButton');
}

document.addEventListener('DOMContentLoaded', app);