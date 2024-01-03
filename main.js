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

const productList = []

productList.push({
    name: 'Bike',
    price: '120',
    image: './assets/pexels-google-deepmind-17485817.jpg',
})

{/* <div class="product-card">
    <img src="assets\pexels-google-deepmind-17485817.jpg" alt="">
    <div class="product-info">
        <div>
            <p>120,00$</p>
            <p>Product</p>
        </div>
        <figure>
            <img src="./assets/icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> */}

for (product of productList) {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')

    const img = document.createElement('img')
    img.setAttribute('src', product.image)

    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')
    
    const productInfoDiv = document.createElement('div')
    
    const productPrice = document.createElement('p')
    productPrice.innerText = '$' + product.price

    const productName = document.createElement('p')
    productName.innerText = product.name

    const productInfoFigure = document.createElement('figure')
}