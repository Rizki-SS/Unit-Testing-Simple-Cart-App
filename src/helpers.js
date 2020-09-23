const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => (qty > 1) ? qty - 1 : qty;

const total = (price, qty) => price * qty;

module.exports = {
    incrementQty,
    decrementQty,
    total,
};