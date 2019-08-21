/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // for (let item of needle) {
    //     let index = 0;
    //     for (let i in haystack) {
    //         if (haystack[i] == item) {
    //             index = i;
    //         }
    //     }
    // }
    return haystack.indexOf(needle)
};

