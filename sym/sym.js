"use strict";
function sym(...args) {
    const uniqueArgs = [...args].map(arg => Array.from(new Set(arg)));
    if (uniqueArgs.length < 3) {
        const result = symDiffOfTwo(uniqueArgs[0], uniqueArgs[1]);
        return result.sort();
    }
    else {
        const [, , ...newArgs] = args;
        return sym(symDiffOfTwo(uniqueArgs[0], uniqueArgs[1]), ...newArgs);
    }
}
function symDiffOfTwo(firstArray, secondArray) {
    const flattedArrays = [...firstArray, ...secondArray];
    const collection = Array.from(new Set(flattedArrays));
    return collection.filter(item => checkIncludes(flattedArrays, item));
}
function checkIncludes(arr, element) {
    let counter = 0;
    for (let item of arr) {
        if (item === element)
            counter++;
        if (counter > 1)
            return false;
    }
    return true;
}
console.log(sym([1, 2, 3], [5, 2, 1, 4]), sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));
