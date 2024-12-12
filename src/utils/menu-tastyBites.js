// Function to create a product card
function createProductCard(imageSrc, title, price, description, ingredients) {
    const cardContainer = document.getElementById('card__container');

    // Create card elements
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = title;
    img.style.width = '170px';
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
    modalImg.style.width = '180px';
    document.querySelector('.modal__title').textContent = title;
    document.querySelector('.modal__price').textContent = price;
    document.querySelector('.modal__descp').textContent = description;
    document.querySelector('.modal__ingredients').textContent = `Ingredients: ${ingredients}`;
    modal.style.display = "block"; // Show the modal
}

// Close the modal when the user clicks on <span> (x)
document.querySelector('.close').onclick = function() {
    document.querySelector('.modal').style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    const modal = document.querySelector('.modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Example products with additional details
const products = [
    { imageSrc: 'CR.svg', title: 'CINNAMON ROLL', price: '₱130', description: 'A soft, spiraled pastry with a sweet cinnamon filling and a creamy glaze.', ingredients: 'Flour, cinnamon, sugar, butter, and cream cheese.' },
    { imageSrc: 'WCC.svg', title: 'WHITE CHOCOLATE CROISSANT', price: '₱130', description: 'A flaky, buttery croissant filled with rich white chocolate for a luscious treat.', ingredients: 'Flour, butter, white chocolate, and sugar.' },
    { imageSrc: 'MC.svg', title: 'MATCHA CROISSANT', price: '₱130', description: 'A delicate croissant infused with earthy matcha flavor for a unique twist.', ingredients: 'Flour, butter, matcha powder, and sugar.' },
];

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Generate cards for each product
    products.forEach(product => {
        createProductCard(product.imageSrc, product.title, product.price, product.description, product.ingredients);
    });
});