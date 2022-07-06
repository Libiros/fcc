"use strict";
function compareNames(a, b) {
    if (a[1] > b[1])
        return 1;
    if (a[1] < b[1])
        return -1;
    return 0;
}
function updateInventory(arr1, arr2) {
    const obj1 = Object.fromEntries(arr1.map(([key, value]) => [value, key]));
    const obj2 = Object.fromEntries(arr2.map(([key, value]) => [value, key]));
    for (let item in obj2) {
        if (Reflect.has(obj1, item)) {
            obj1[item] += obj2[item];
        }
        else {
            obj1[item] = obj2[item];
        }
    }
    return Object.entries(obj1)
        .map(([key, value]) => [value, key])
        .sort(compareNames);
}
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];
var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];
console.log(updateInventory(curInv, newInv));
