import {
    incrementQty,
    decrementQty,
    sum,
    diskon,
    sumDiskon,
    payOff
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const price = document.querySelector('#price');
const subTotal = document.querySelector('#subtotal');
const comfirmBtn = document.querySelector('#confirmButton');
const codeInput = document.querySelector('#code');
const diskonTxt = document.querySelector('#diskon');

let Coupon;
const getDiskon = () => {
    try {
        Coupon = diskon(codeInput.value);
        alert('success use code');
    } catch (error) {
        Coupon = null;
        alert(error);
    }
};

const hitung = () => {
    if (Coupon != null) {
        const total = sum(price.value, qtyInput.value);
        const off = payOff(total, Coupon);
        diskonTxt.textContent = `Rp. ${off}`;
        subTotal.textContent = `Rp. ${sumDiskon(total,off)}`;
    } else {
        diskonTxt.textContent = `Rp. 0`;
        subTotal.textContent = `Rp. ${sum(price.value, qtyInput.value)}`
    }
}

price.addEventListener('change', () => {
    if (price.value < 0) { price.value = 0 };
    hitung();
});

qtyInput.addEventListener('change', () => {
    if (qtyInput.value <= 0) { qtyInput.value = 1 };
    hitung();
})

incrButton.addEventListener('click', () => {
    qtyInput.value = incrementQty(qtyInput.value);
    hitung();
});

decrButton.addEventListener('click', () => {
    qtyInput.value = decrementQty(qtyInput.value);
    hitung();
});

comfirmBtn.addEventListener('click', () => {
    getDiskon();
    hitung();
})