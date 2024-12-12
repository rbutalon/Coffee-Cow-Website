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
    { imageSrc: 'okinawa.svg', title: 'OKINAWA', price: '₱110', description: 'A sweet, caramel-like drink with brown sugar and a rich, creamy flavor.', ingredients: 'Brown sugar, milk, and ice.' },
    { imageSrc: 'wintermelon.svg', title: 'WINTERMELON', price: '₱110', description: 'A refreshing, mildly sweet drink made from wintermelon, often combined with tea or milk.', ingredients: 'Wintermelon, sugar, tea or milk.' },
    { imageSrc: 'matcha-milk-tea.svg', title: 'MATCHA MILK TEA', price: '₱130', description: 'A finely ground powdered green tea, known for its earthy flavor and vibrant green color.', ingredients: 'Matcha powder and water (or milk for lattes).' },
    { imageSrc: 'ube-macapuno.svg', title: 'UBE MACAPUNO', price: '₱120', description: 'A sweet Filipino dessert combining the rich flavor of purple yam (ube) with chewy coconut sport (macapuno).', ingredients: 'Ube, macapuno, sugar, and coconut milk.' },
    
];

document.addEventListener('DOMContentLoaded', () => {
    products.forEach(product => {
        createProductCard(product.imageSrc, product.title, product.price, product.description, product.ingredients);
    });
});