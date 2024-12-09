$(document).ready(function(){
    $("#showRegistrationForm").click(function(){
        $("#authForm").hide();
        $("#registrationForm").show();
    });

    $("#showLoginForm").click(function(){
        $("#registrationForm").hide();
        $("#authForm").show();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('button');
    const cart = document.getElementById('cart');
    let totalPrice = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.parentNode;
            const name = card.querySelector('h3').innerText;
            const price = card.querySelector('.new__price').innerText;
            const item = document.createElement('div');
            item.classList.add('cart-item');
            item.innerHTML = `
                <span class="item-name">${name}</span>
                <span class="item-price">${price}</span>
                <button class="remove-button" onclick="removeItem(this)">Удалить</button>
            `;
            cart.appendChild(item);
            updateTotal(price);
        });
    });

    function updateTotal(price) {
        const priceValue = parseFloat(price.replace(/\s/g, '').replace('р.', ''));
        totalPrice += priceValue;
        document.getElementById('total-price').innerText = totalPrice + ' рублей';
    }
});

function removeItem(button) {
    const item = button.parentNode;
    const price = item.querySelector('.item-price').innerText;
    const priceValue = parseFloat(price.replace(/\s/g, '').replace('р.', ''));
    const totalPrice = document.getElementById('total-price');
    let totalValue = parseFloat(totalPrice.innerText);
    totalValue -= priceValue;
    totalPrice.innerText = totalValue + ' рублей';
    item.remove();
}
