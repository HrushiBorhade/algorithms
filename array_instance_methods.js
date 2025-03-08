console.log("Array Instance Methods");

console.log("\n->Array.prototype.at()")
const arr = [1, 2, 3, 4, 5];
const itemAt = arr.at(2);
console.log(itemAt);
const lastItem = arr.at(-1);
console.log(lastItem);

console.log("\n->Array.prototype.concat()");
const arr2 = [6, 7, 8, 9, 10];
const newArr = arr.concat(arr2);
console.log(newArr);

