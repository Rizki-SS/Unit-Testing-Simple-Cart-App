/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const { sum, incrementQty, decrementQty } = require('../helpers.js');

test('pembelian 2 bauh @500', () => {
    expect(sum(500, 2)).toBe(1000);
});

test('mengurangi qty 1', () => {
    expect(decrementQty(1)).toBe(1)
});

test('mengurangi qty 3', () => {
    expect(decrementQty(3)).toBe(2)
});

test('menambah qty 2', () => {
    expect(incrementQty(2)).toBe(3)
});