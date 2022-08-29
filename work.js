// 1A
const output = inventory.map((entry) => {
    return entry.type;
});
console.log (output);

// 1B
const sold = inventory.filter((entry) => {
    return entry.originalStock === entry.sold
});
console.log(sold);

// 1C
const ambi = inventory.filter((entry) => {
    return entry.options.ambiLight === true;
});
console.log(ambi);

// 1D
const price = inventory.sort((a, b) => {
    if (a.price < b.price) {
        return -1;
    }
    if (a.price > b.price) {
        return 1;
    }
    return 0;
});
console.log(price);

// 2A
// let soldTv = 0;
//
// for (let i = 0; i < inventory.lenght ; i++) {
//     soldTv = inventory[i].sold += inventory[i].sold;
// }
// console.log(soldTv);
// 2B