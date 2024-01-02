const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const actionBarMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

mobileMenu.classList.remove('active')

menuEmail.addEventListener('click', toggleDesktopMenu)
actionBarMenu.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('active')
}