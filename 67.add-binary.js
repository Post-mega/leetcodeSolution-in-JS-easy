/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let ans = "";
    let ca = 0; // 进位
    for(let i = a.length - 1, j = b.length - 1;i >= 0 || j >= 0; i--, j--) {
        let sum = ca;
        sum += i >= 0 ? parseInt(a[i]) : 0; // 如果其中一个字符串不够长
        sum += j >= 0 ? parseInt(b[j]) : 0; // 用 0 补充
        ans += sum % 2;
        ca = Math.floor(sum / 2);   // 处理 1/2 的情况，此时不进位
    }
    ans += ca == 1 ? ca : "";
    return ans.split('').reverse().join('');
};

