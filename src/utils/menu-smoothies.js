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
    { 
        imageSrc: 'frozen-strawberry.svg', 
        title: 'FROZEN STRAWBERRY', 
        price: '₱100', 
        description: 'Indulge in the sweet and tangy taste of our Frozen Strawberry, made with the freshest strawberries and a hint of magic. Perfect for hot summer days and a refreshing pick-me-up any time of the year.', 
        ingredients: 'Strawberries, Sugar, Water' 
    },
    { 
        imageSrc: 'frozen-melon.svg', 
        title: 'FROZEN MELON', 
        price: '₱100', 
        description: 'Experience the refreshing and revitalizing taste of our Frozen Melon, carefully crafted to quench your thirst and satisfy your cravings. A sweet and soothing treat for any occasion.', 
        ingredients: 'Melon, Honey, Ice' 
    },
    { 
        imageSrc: 'frozen-lychee.svg', 
        title: 'FROZEN LYCHEE', 
        price: '₱100', 
        description: 'Discover the exotic and alluring taste of our Frozen Lychee, expertly blended to transport you to a tropical paradise. A sweet and fruity escape from the ordinary.', 
        ingredients: 'Lychee, Sugar, Water' 
    },
    { 
        imageSrc: 'frozen-caffeine.svg', 
        title: 'FROZEN CAFFEINE', 
        price: '₱100', 
        description: 'A cool blend of rich espresso and creamy milk is perfectly chilled with ice to give you that refreshing kick you need to power through your day. Smooth, bold, and seriously satisfying.', 
        ingredients: 'Cold Brew Coffee, Milk, Ice, Sugar' 
    },
];


// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Generate cards for each product
    products.forEach(product => {
        createProductCard(product.imageSrc, product.title, product.price, product.description, product.ingredients);
    });
});