import {
    incrementQty,
    decrementQty,
    sum,
    diskon
} from './helpers.js';

import { kupon } from "./const.js";

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const price = document.querySelector('#price');
const subTotal = document.querySelector('#subtotal')

price.addEventListener('change', () => {
    (price.value < 0) ? price.value = 0: null;
    subTotal.textContent = `Rp. ${sum(price.value, qtyInput.value)}`;
});

qtyInput.addEventListener('change', () => {
    (qtyInput.value <= 0) ? qtyInput.value = 1: null;
    subTotal.textContent = `Rp. ${sum(price.value, qtyInput.value)}`;
})

incrButton.addEventListener('click', () => {
    qtyInput.value = incrementQty(qtyInput.value);
    subTotal.textContent = `Rp. ${sum(price.value, qtyInput.value)}`;
});

decrButton.addEventListener('click', () => {
    qtyInput.value = decrementQty(qtyInput.value);
    subTotal.textContent = `Rp. ${sum(price.value, qtyInput.value)}`;
});