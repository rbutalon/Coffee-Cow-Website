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
    document .querySelector('.modal__img').src = imageSrc;
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
    { imageSrc: 'HML.svg', title: 'HOT MATCHA LATTE', price: '₱140', description: 'A soothing, creamy matcha beverage to warm your day.', ingredients: 'Matcha powder, milk, and sugar.' },
    { imageSrc: 'HUL.svg', title: 'HOT UBE LATTE', price: '₱140', description: 'A rich and creamy latte with the nutty sweetness of ube.', ingredients: ' Ube puree, milk, and sugar.' },
    { imageSrc: 'IML.svg', title: 'ICED MATCHA LATTE', price: '₱150', description: 'A refreshing and smooth iced drink with the earthy richness of matcha.', ingredients: 'Matcha powder, milk, sugar, and ice.' },
    { imageSrc: 'IUL.svg', title: 'ICED UBE LATTE', price: '₱150', description: 'A chilled, sweet, and creamy ube drink perfect for sunny days.', ingredients: 'Ube puree, milk, sugar, and ice.' },

    { imageSrc: 'SCF.svg', title: 'STRAWBERRY CREAM FRAPPE', price: '₱160', description: 'A frosty delight blending creamy sweetness with fresh strawberry flavor.', ingredients: 'milk, whipped cream, and sugar.' },
    { imageSrc: 'SL.svg', title: 'STRAWBERRY LATTE', price: '₱150', description: 'A smooth and sweet combination of fresh strawberries and creamy milk.', ingredients: 'Strawberries, milk, and sugar.' },
    { imageSrc: 'SMF.svg', title: 'STRAWBERRY MATCHA FUSION', price: '₱16O', description: 'A vibrant blend of earthy matcha and sweet strawberries for a unique twist.', ingredients: 'Matcha powder, strawberries, milk, and sugar.' },
    { imageSrc: 'UBF.svg', title: 'UBE BLAST FRAPPE', price: '₱160', description: 'A refreshing, creamy frappe with the delightful taste of ube.', ingredients: 'Ube puree, milk, whipped cream, and sugar.' },
];

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Generate cards for each product
    products.forEach(product => {
        createProductCard(product.imageSrc, product.title, product.price, product.description, product.ingredients);
    });
});