// Function to create a product card
function createProductCard(imageSrc, title, price, description, ingredients) {
    const cardContainer = document.getElementById('card__container');

    // Create card elements
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = title;
    img.style.width = '200px';
    img.style.marginBottom = '40px';

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

    // Append card to the container
    cardContainer.appendChild(card);

    // Add click event to show modal
    card.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        showModal(imageSrc, title, price, description, ingredients);
    });
}

// Function to show the modal with product details
function showModal(imageSrc, title, price, description, ingredients) {
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal__img');
    modalImg.src = imageSrc;
    modalImg.style.width = '220px';
    document.querySelector('.modal__title').textContent = title;
    document.querySelector('.modal__price').textContent = price;
    document.querySelector('.modal__descp').textContent = description;
    document.querySelector('.modal__ingredients').textContent = `Ingredients: ${ingredients}`;
    modal.style.display = "block"; // Show the modal
}

// close button
document.querySelector('.close').onclick = function () {
    document.querySelector('.modal').style.display = "none";
}

// close modal if clicked outside
window.onclick = function (event) {
    const modal = document.querySelector('.modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

const products = [
    { imageSrc: '/Tomato and Herb.svg', title: 'TOMATO AND HERB PASTA', price: '₱320', description: 'Al dente in garlic-infused olive oil, perfectly seasoned shrimp, dressed in parsley - a hint of lemon.', ingredients: 'Tomatoes, pasta, garlic, olive oil, and mixed herbs.' },
    { imageSrc: '/Shrimp Aglio Olio.svg', title: 'SHRIMP AGLIO OLIO PASTA', price: '₱250', description: 'Vibrant tomato base with the flavor of fresh basil, oregano, and parsley. Pure comfort in every bite!', ingredients: 'Shrimp, pasta, garlic, olive oil, and chili flakes.' },
];

document.addEventListener('DOMContentLoaded', () => {
    products.forEach(product => {
        createProductCard(product.imageSrc, product.title, product.price, product.description, product.ingredients);
    });
});