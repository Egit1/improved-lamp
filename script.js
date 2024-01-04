
const navbar = document.querySelector('.nav-bar')
function menu(e) {
    e.className === "fa fa-bars" ? (e.className = "fa fa-times", navbar.classList.add('open'), navbar.classList.add("opacity")) : (e.className = "fa fa-bars", navbar.classList.remove('open'), navbar.classList.remove("opacity"));
}

const socialIcon = document.querySelector('#social');
const iconLink = document.querySelector('.iconlink');

socialIcon.addEventListener('click', function () {
    iconLink.classList.toggle('open');

})