"use strict";
function fact(n) {
    if (n === 1)
        return n;
    return n * fact(n - 1);
}
function checkRepeats(str) {
    return !str.match(/(.)\1+/);
}
function nth_permutation($arr, $index, $size) {
    let permutation_string = '';
    for (let i = 0; i < $size; i++) {
        let item = $index % $arr.length;
        $index = Math.floor($index / $arr.length);
        permutation_string += $arr[item];
        $arr.splice(item, 1);
    }
    return permutation_string;
}
function permAlone(str) {
    const L = str.length;
    let count = 0;
    for (let i = 0; i < fact(L); i++) {
        let temp = str.split('');
        let _str = nth_permutation(temp, i, L);
        count = checkRepeats(_str) ? count + 1 : count;
    }
    return count;
}
permAlone('abcdefa');
