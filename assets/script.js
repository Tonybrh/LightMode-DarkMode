const body = document.getElementsByTagName('body')[0];
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const footer = document.getElementsByTagName('footer')[0];
const darkModeClass = 'dark-mode'
button.addEventListener('click', changeMode);
function changeMode() {
    changeClass()
    changeText()
}
function changeClass() {
    body.classList.toggle(darkModeClass);
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}
function changeText() {
    const lightMode = 'Light mode'
    const darkMode = 'Dark mode'

    if (body.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }
    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";

}
