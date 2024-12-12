 // Function to create a product card
 function createProductCard(imageSrc, title, price, description, ingredients) {
    const cardContainer = document.getElementById('card__container');

    // Create card elements
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

    // Append elements to the card
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

// close button
document.querySelector('.close').onclick = function() {
    document.querySelector('.modal').style.display = "none";
}

// close when user clicks anywhere outside
window.onclick = function(event) {
    const modal = document.querySelector('.modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

const products = [
    { imageSrc: 'lemon.svg', title: 'LEMON', price: '₱110', description: 'A refreshing tea infused with the zesty flavor of lemon.', ingredients: 'Brown sugar, milk, and ice.Lemon, tea, sugar, and ice.' },
    { imageSrc: 'kiwi.svg', title: 'KIWI', price: '₱110', description: 'A tangy and tropical tea with the distinct taste of kiwi.', ingredients: 'Kiwi, tea, sugar, and ice.' },
    { imageSrc: 'passionfruit.svg', title: 'PASSION FRUIT', price: '₱120', description: 'A vibrant, tropical tea with the sweet and tangy flavor of passion fruit.', ingredients: 'Passion fruit, tea, sugar, and ice.' },
    { imageSrc: 'dragonfruit.svg', title: 'DRAGONFRUIT', price: '₱130', description: 'A mildly sweet and visually striking tea made with dragonfruit.', ingredients: 'Dragonfruit, tea, sugar, and ice.' },
];

// wait the DOM to be loaded, then call the function to generate cards
document.addEventListener('DOMContentLoaded', () => {
    products.forEach(product => {
        createProductCard(product.imageSrc, product.title, product.price, product.description, product.ingredients);
    });
});