import {
    incrementQty,
    decrementQty,
    sum,
    diskon,
    sumDiskon
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const price = document.querySelector('#price');
const subTotal = document.querySelector('#subtotal');
const comfirmBtn = document.querySelector('#confirmButton');
const codeInput = document.querySelector('#code');
const diskonTxt = document.querySelector('#diskon');

price.addEventListener('change', () => {
    if (price.value < 0) { price.value = 0 };
    subTotal.textContent = `Rp. ${sum(price.value, qtyInput.value)}`;
});

qtyInput.addEventListener('change', () => {
    if (qtyInput.value <= 0) { qtyInput.value = 1 };
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

comfirmBtn.addEventListener('click', () => {
    try {
        const getDiskon = diskon(sum(price.value, qtyInput.value), codeInput.value);
        diskonTxt.textContent = `Rp. ${getDiskon}`;
        subTotal.textContent = `Rp. ${sumDiskon(sum(price.value, qtyInput.value),getDiskon)}`
    } catch (error) {
        alert(error)
    }
})