function createProductCard(imageSrc, title, price, description, ingredients) {
    const cardContainer = document.getElementById('card__container');

    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = title;

    const cardDescp = document.createElement('div');
    cardDescp.className = 'card__descp';

    const cardTitle = document.createElement('h3');
    cardTitle.className = 'card__title';
    cardTitle.textContent = title;

    const cardPrice = document.createElement('p');
    cardPrice.className = 'card__price';
    cardPrice.textContent = price;

    cardDescp.appendChild(cardTitle);
    cardDescp.appendChild(cardPrice);
    card.appendChild(img);
    card.appendChild(cardDescp);

    cardContainer.appendChild(card);

    card.addEventListener('click', (event) => {
        event.preventDefault(); 
        showModal(imageSrc, title, price, description, ingredients);
    });
}

function showModal(imageSrc, title, price, description, ingredients) {
    const modal = document.querySelector('.modal');
    document .querySelector('.modal__img').src = imageSrc;
    document.querySelector('.modal__title').textContent = title;
    document.querySelector('.modal__price').textContent = price;
    document.querySelector('.modal__descp').textContent = description;
    document.querySelector('.modal__ingredients').textContent = `Ingredients: ${ingredients}`;
    modal.style.display = "block"; 
}

// Close button
document.querySelector('.close').onclick = function() {
    document.querySelector('.modal').style.display = "none";
}

// close modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    const modal = document.querySelector('.modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

const products = [
    { 
        imageSrc: '/valyrian-fizz.svg', 
        title: 'VALYRIAN FIZZ', 
        price: '₱110', 
        description: 'Experience a burst of fruity goodness with our Valyrian Fizz, perfectly complemented by a refreshing fizz. This sparkling treat is ideal for quenching your thirst on any occasion.', 
        ingredients: 'Sparkling Water, Lime Juice, Fruit Syrup.' 
    },
    { 
        imageSrc: '/jade-sparkle.svg', 
        title: 'JADE SPARKLE', 
        price: '₱90', 
        description: 'Our Jade Sparkle is a lively citrus drink infused with the coolness of fresh mint. Its vibrant green hue makes it as visually stunning as it is refreshing.', 
        ingredients: 'Lemonade, Mint Leaves, Green Food Coloring.' 
    },
    { 
        imageSrc: '/golden-zest.svg', 
        title: 'GOLDEN ZEST', 
        price: '₱90', 
        description: 'Enjoy the zesty and bold flavors of citrus and ginger in our Golden Zest. This invigorating blend delivers a perfect balance of tanginess and warmth.', 
        ingredients: 'Ginger Ale, Lemon Juice, Orange Zest.' 
    },
    { 
        imageSrc: '/tropical-splash.svg', 
        title: 'TROPICAL SPLASH', 
        price: '₱100', 
        description: 'Dive into a tropical paradise with our Tropical Splash, a delightful mix of pineapple and coconut flavors. Every sip takes you on a refreshing getaway with a fizzy touch.', 
        ingredients: 'Pineapple Juice, Coconut Cream, Soda Water.' 
    },
];


// wait for the document to load before executing this function
document.addEventListener('DOMContentLoaded', () => {
    products.forEach(product => {
        createProductCard(product.imageSrc, product.title, product.price, product.description, product.ingredients);
    });
});