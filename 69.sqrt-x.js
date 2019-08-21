/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    // if (x == 0) return 0;
    // let cur = 1.0, pre;
    // while (1) {
    //     pre = cur;
    //     cur = ((cur + x) / cur) / 2.0;
    //     if (Math.abs(cur - pre) < 1e-6) {
    //         return cur;
    //     }
    // }
    let left = 0;
    let right = Math.floor(x >> 1) + 1;
    let mid;
    while (left < right) {
        mid = (left + right + 1) >> 1;      // 更高效率的除二
        if (mid**2 > x) {
            right = mid - 1;
        } else {
            left = mid;
        }
    }
    return left;
    // return Math.floor(Math.sqrt(x));
};

