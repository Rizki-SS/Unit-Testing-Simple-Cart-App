/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const {
    sum,
    incrementQty,
    decrementQty,
    diskon,
    sumDiskon,
    payOff
} = require('../helpers.js');

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

test('cek kode diskon20 seharusnya ada', () => {
    const result = {
        kode: 'diskon20',
        tipe: 'persen',
        jumlah: '20',
    };

    let realita;
    try {
        realita = diskon('diskon20')
    } catch (error) {
        realita = error;
    }
    expect(diskon('diskon20')).toEqual(result);
})

test('cek kode "tidakada" seharusnya kode tidak valid', () => {
    expect(() =>
        diskon('tidakada')
    ).toThrow('kode tidak valid');
})

test('payoff kupon off 20% dari 100 =  20', () => {
    expect(payOff(100, diskon('diskon20'))).toBe(20)
});

test('payoff kupon off 2000 dari 1000 =  1000', () => {
    expect(payOff(1000, diskon('diskon2000'))).toBe(1000)
});

test('payoff kupon off 2000 dari 3000 =  2000', () => {
    expect(payOff(3000, diskon('diskon2000'))).toBe(2000)
});

test('total dari pembelian 2000 dengan diskon 1000 maka = 1000', () => {
    expect(sumDiskon(2000, 1000)).toBe(1000);
});