//Clickables
const menuEmail = document.querySelector('.navbar-email')
const actionBarMenu = document.querySelector('.menu')
const shoppingIcon = document.querySelector('.navbar-shopping-cart')

//Menus
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

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

productList.push({
    name: 'Hora',
    price: '2825',
    image: './assets/pexels-google-deepmind-17485817.jpg',
})

function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
        
        const productInfoDiv = document.createElement('div')
        
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
    
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './assets/icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)