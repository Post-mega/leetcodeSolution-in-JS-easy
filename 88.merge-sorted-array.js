/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (nums1[j] >= nums2[i]) {
                let temp = nums1[j];
                nums1[j] = nums2[i];
                nums2[i] = temp;
            }
        }
    }
};

// nums1 循环
//     nums2 循环  
//         如果 1 的大于等于 2 
//             在 1 的前面插入 2 的值
//             接着判断 2 的下一个值


// 2 3 6
// 4 5

// 2 3 4
// 6 5

