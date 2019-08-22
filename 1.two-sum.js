/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var res = target - nums[i]
        var index = nums.indexOf(res)
        if (index !== -1 && index != i) {
            return [i, index]
        }
    }
};

