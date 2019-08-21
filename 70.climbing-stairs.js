/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
    // const sqrt_5 = Math.sqrt(5);
    // const fib_n = Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2,n + 1);
    // return Math.round(fib_n / sqrt_5);
};

// 斐波那契数列
// 1//1 -> 1
// 1 2//2 -> 2
// 111 12 21//3 -> 3
// 1111 211 121 112 22//4 -> 5
// 11111 2111 1211 1121 1112 221 122 212//5 -> 8


