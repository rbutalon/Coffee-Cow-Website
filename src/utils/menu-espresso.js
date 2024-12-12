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

// close button
document.querySelector('.close').onclick = function() {
    document.querySelector('.modal').style.display = "none";
}

// close modal if user clicks outside the modal
window.onclick = function(event) {
    const modal = document.querySelector('.modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

const products = [
    { imageSrc: 'hot-americano.svg', title: 'HOT AMERICANO', price: '₱100', description: 'A classic espresso-based beverage, the Hot Americano is made by diluting a rich and robust shot of espresso with hot water. This results in a smooth, flavorful coffee with a bold taste that is perfect for those who appreciate the pure essence of espresso.', ingredients: 'Freshly Brewed Espresso, Hot Water' },
    { imageSrc: 'iced-americano.svg', title: 'ICED AMERICANO', price: '₱110', description: 'A refreshing take on the traditional Americano, the Iced Americano combines a bold shot of espresso with cold water and ice.', ingredients: 'Freshly Brewed Espresso, Cold Water, and Ice.' },
    { imageSrc: 'hot-cafe-latte.svg', title: 'HOT CAFE LATTE', price: '₱120', description: 'A smooth and creamy blend of espresso and steamed milk, topped with a light layer of froth.', ingredients: 'Freshly Brewed Espresso and Steamed Milk.' },
    { imageSrc: 'iced-cafe-latte.svg', title: 'ICED CAFE LATTE', price: '₱130', description: 'A delightful cold beverage, the Iced Cafe Latte features a rich shot of espresso combined with cold milk and ice.', ingredients: 'Freshly Brewed Espresso, Milk, and Ice.' },
    { imageSrc: 'hot-cappuccino.svg', title: 'HOT CAPPUCCINO', price: '₱120', description: 'A traditional Italian coffee drink that consists of equal parts espresso, steamed milk, and milk froth.', ingredients: 'Freshly Brewed Espresso, Steamed Milk, and Milk Foam.' },
    { imageSrc: 'iced-cappuccino.svg', title: 'ICED CAPPUCCINO', price: '₱130', description: 'A cool twist on the classic cappuccino, the Iced Cappuccino combines a bold shot of espresso with cold milk and ice, topped with a frothy layer of milk foam.', ingredients: 'Freshly Brewed Espresso, Milk, Foam, and Ice.' },
];

document.addEventListener('DOMContentLoaded', () => {
    products.forEach(product => {
        createProductCard(product.imageSrc, product.title, product.price, product.description, product.ingredients);
    });
});