console.log ('JS loaded');

function toggleDarkMode(){
    let body= document.getElementById('app');
    body.classList.toggle('-dark');
}

function app(){

    let DarkModeButton = document.getElementById ('dark-mode');
    DarkModeButton.addEventListener('click', toggleDarkMode);

    console.log ('DarkModeButton');

    /*let showSlides = document.getElementsByClassName('-hide');
    showSlides.addEventListener('click', showSlides); */
}


document.addEventListener('DOMContentLoaded', app);