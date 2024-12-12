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

document.querySelector('.close').onclick = function() {
    document.querySelector('.modal').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.querySelector('.modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

const products = [
    { imageSrc: '/java-chip.svg', title: 'JAVA CHIP', price: '₱180', description: 'A coffee-flavored treat with chocolate chips, offering a blend of rich coffee and sweet chocolate.', ingredients: 'Milk, Ice, Coffee Frapuccino Syrup, Coffee, Mocha Sauce, Frapuccino Chips' },
    { imageSrc: '/triple-chocolate.svg', title: 'TRIPLE CHOCOLATE', price: '₱170', description: 'A rich and velvety treat made with blended chocolate syrup, cocoa powder, and chocolate chips, topped with whipped cream and a drizzle of chocolate sauce.', ingredients: 'Milk, Chocoloate Syrup, Cocoa Powder, Chocolate Chips, Ice, Whipped Cream' },
    { imageSrc: '/toffee-caramel.svg', title: 'TOFFEE CARAMEL', price: '₱150', description: 'A creamy blend of chilled coffee, caramel sauce, and buttery toffee, topped with whipped cream, caramel drizzle, and crunchy toffee bits. Sweet, refreshing, and irresistibly indulgent!', ingredients: 'Freshly brewed coffee, Milk, Toffee Syrup, Caramel Drizzle, Ice, Whipped Cream, Chocolate Bits' },

];

document.addEventListener('DOMContentLoaded', () => {
    products.forEach(product => {
        createProductCard(product.imageSrc, product.title, product.price, product.description, product.ingredients);
    });
});