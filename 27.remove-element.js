/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let ans = 0;
    for(let num of nums) {
        if(num != val) {
            nums[ans] = num;
            ans++;
        }
    }
    return ans;
};

