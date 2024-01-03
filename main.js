//Clickables
const menuEmail = document.querySelector('.navbar-email')
const actionBarMenu = document.querySelector('.menu')
const shoppingIcon = document.querySelector('.navbar-shopping-cart')

//Menus
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', () => toggleMenu(desktopMenu))
actionBarMenu.addEventListener('click', () => toggleMenu(mobileMenu))
shoppingIcon.addEventListener('click', () => toggleMenu(aside))

function toggleMenu (menuElement){
    if (menuElement.classList.contains('active')) {
        menuElement.classList.remove('active');
        setTimeout(() => {
            menuElement.style.display = 'none';
        }, 300); // El tiempo debe coincidir con la duración de la transición
    } else {
        closeAllMenus()
        menuElement.style.display = 'block';
        // Necesitamos darle tiempo al navegador para aplicar el display: block antes de agregar la clase active
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                menuElement.classList.add('active');
            });
        });
    } 
}
function closeAllMenus(){
    const menus = document.querySelectorAll('.animated-menu')
    menus.forEach(menu => {
        if(menu.classList.contains('active')){
            menu.classList.remove('active')
            setTimeout(() => {
                menu.style.display = 'none'
            }, 300)
        }
    })
}