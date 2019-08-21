/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let len = digits.length;
    for(let i = len - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] %= 10;
        if(digits[i]!=0)
            return digits;
    }
    // 到这里表示出现类似 99 的情况，需要在最高位加一
    // 新建一个多一位数的数组，全部赋值 0
    digits = [...Array(len + 1)].map(_=>0);;
    digits[0] = 1; // 最高位置 1
    return digits;
};

