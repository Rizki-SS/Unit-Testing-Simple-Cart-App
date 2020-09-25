import { kupon } from "./const.js";

const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => (qty > 1) ? qty - 1 : qty;
const sum = (price, qty) => price * qty;

const diskon = (sum, kode) => {
    const coupon = kupon.filter(kupon => kupon.kode === kode)
    if (coupon.length === 0) {
        throw ('kode tidak valid');
    }

    if (coupon[0].tipe === "persen") {
        return sum * coupon[0].jumlah / 100;
    } else {
        return (coupon[0].jumlah > sum) ? sum : coupon[0].jumlah;
    }
}

const sumDiskon = (sum, diskon) => sum - diskon;

module.exports = {
    incrementQty,
    decrementQty,
    sum,
    diskon,
    sumDiskon
};