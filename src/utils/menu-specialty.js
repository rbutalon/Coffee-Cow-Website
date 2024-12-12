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
        event.preventDefault(); // Prevent default anchor behavior
        showModal(imageSrc, title, price, description, ingredients);
    });
}

// Function to show the modal with product details
function showModal(imageSrc, title, price, description, ingredients) {
    const modal = document.querySelector('.modal');
    document.querySelector('.modal__img').src = imageSrc;
    document.querySelector('.modal__title').textContent = title;
    document.querySelector('.modal__price').textContent = price;
    document.querySelector('.modal__descp').textContent = description;
    document.querySelector('.modal__ingredients').textContent = `Ingredients: ${ingredients}`;
    modal.style.display = "block";
}

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

const products = [
    { imageSrc: 'hot-spanish-latte.svg', title: 'HOT SPANISH LATTÈ', price: '₱130', description: 'A creamy blend of rich espresso, steamed milk, and a touch of sweetened condensed milk, creating a perfectly smooth and indulgent coffee experience.', ingredients: 'Freshly Brewed Espresso, Steamed Milk, Condensed Milk' },

    { imageSrc: 'spanish-latte.svg', title: 'ICED SPANISH LATTÈ', price: '₱140', description: 'A refreshing take on a classic favorite, featuring bold espresso, creamy milk, and sweetened condensed milk served over ice for a smooth, cooling treat.', ingredients: 'Freshly Brewed Espresso, Cold Milk, Condensed Milk, Ice' },

    { imageSrc: 'hot-caramel-macchiato.svg', title: 'HOT CARAMEL MACCHIATO', price: '₱140', description: 'A rich espresso layered with steamed milk and velvety caramel syrup, topped with a delicate drizzle of caramel for the perfect balance of sweetness and warmth.', ingredients: 'Freshly Brewed Espresso, Steamed Milk, Vanilla Syrup, Caramel Drizzle' },

    { imageSrc: 'iced-caramel-macchiato.svg', title: 'ICED CARAMEL MACCHIATO', price: '₱150', description: 'A deliciously refreshing twist on a classic, featuring layers of rich espresso, cold milk, and sweet vanilla syrup, topped with a generous drizzle of caramel and served over ice.', ingredients: 'Freshly Brewed Espresso, Cold Milk, Vanilla Syrup, Caramel Drizzle'},

    { imageSrc: 'hot-white-chocolate-mocha.svg', title: 'HOT WHITE CHOCOLATE MOCHA', price: '₱170', description: 'A luxurious combination of smooth white chocolate and rich espresso, blended with steamed milk for a cozy and indulgent treat.', ingredients: 'Freshly Brewed Espresso, Steamed Milk, White Chocolate Syrup' },

    { imageSrc: 'iced-white-chocolate-mocha.svg', title: 'ICED WHITE CHOCOLATE MOCHA', price: '₱180', description: 'A creamy and refreshing blend of bold espresso, sweet white chocolate, and cold milk, served over ice.', ingredients: 'Freshly Brewed Espresso, Cold Milk, White Chocolate Syrup, Ice'},

    { imageSrc: 'hot-mocha.svg', title: 'HOT CAFÈ MOCHA', price: '₱140', description: 'A classic blend of rich espresso and creamy steamed milk, infused with luscious chocolate syrup and topped with a swirl of whipped cream for the perfect cozy indulgence.', ingredients: 'Freshly Brewed Espresso, Steamed Milk, Chocolate Syrup'},

    { imageSrc: 'iced-mocha.svg', title: 'ICED CAFÈ MOCHA', price: '₱150', description: 'A refreshing chocolate-coffee fusion with bold espresso, cold milk, and decadent chocolate syrup, served over ice and topped with whipped cream for a chilled treat.', ingredients: 'Freshly Brewed Espresso, Cold Milk, Chocolate Syrup, Ice'},

    { imageSrc: 'iced-irish-cream-latte.svg', title: 'ICED IRISH CREAM LATTÈ', price: '₱150', description: 'A smooth and creamy delight, featuring bold espresso, cold milk, and the rich, nutty flavor of Irish cream syrup, served over ice for a refreshing and indulgent treat.', ingredients: 'Freshly Brewed Espresso, Cold Milk, Irish Cream Syrup, Ice' },
];

document.addEventListener('DOMContentLoaded', () => {
    products.forEach(product => {
        createProductCard(product.imageSrc, product.title, product.price, product.description, product.ingredients);
    });
});