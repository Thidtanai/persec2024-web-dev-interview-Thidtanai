import autoComplete from "./quiz4";

const testArr = ["Mother", "Think", "Worthy", "Apple", "Android"];
console.log(autoComplete("th", testArr, 1)); //["Think"]
console.log(autoComplete("th", testArr, 2)); //["Think", "Mother"]
console.log(autoComplete("th", testArr, 3)); //["Think", "Mother", "Worthy"]