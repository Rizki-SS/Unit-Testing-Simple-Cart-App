const kupon = [{
        kode: 'diskon20',
        tipe: 'persen',
        jumlah: '20',
    },
    {
        kode: 'diskon2000',
        tipe: 'fix',
        jumlah: '2000',
    },
    {
        kode: 'diskon1000',
        tipe: 'fix',
        jumlah: '1000',
    },
]

const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => (qty > 1) ? qty - 1 : qty;
const sum = (price, qty) => price * qty;

//get diskon code
const diskon = (kode) => {
    const coupon = kupon.filter(kupon => kupon.kode === kode)
    if (coupon.length === 0) {
        throw ('kode tidak valid');
    }
    return coupon[0];
}

//cacluculate payOff
const payOff = (sum, coupon) => {
    if (coupon.tipe === "persen") {
        return sum * coupon.jumlah / 100;
    } else {
        return (coupon.jumlah > sum) ? sum : parseInt(coupon.jumlah);
    }
}

//caclulate total with payoff
const sumDiskon = (sum, diskon) => sum - diskon;

module.exports = {
    incrementQty,
    decrementQty,
    sum,
    diskon,
    sumDiskon,
    payOff
};