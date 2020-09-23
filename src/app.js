import {
    incrementQty,
    decrementQty,
    total
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const price = document.querySelector('#price');
const subTotal = document.querySelector('#subtotal')

price.addEventListener('change', () => {
    (price.value <= 0) ? price.value = 1: price;
    subTotal.textContent = total(price.value, qtyInput.value)
});

incrButton.addEventListener('click', () => {
    qtyInput.value = incrementQty(qtyInput.value);
    subTotal.textContent = total(price.value, qtyInput.value);
});

decrButton.addEventListener('click', () => {
    qtyInput.value = decrementQty(qtyInput.value);
    subTotal.textContent = total(price.value, qtyInput.value);
});