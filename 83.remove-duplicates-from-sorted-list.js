/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let cur = head;
    while(cur && cur.next) {    // 如果还没有到链表尾
        if(cur.val == cur.next.val) {   // 如果相邻两个值相等
            cur.next = cur.next.next;   // 跳过一个相同的
        } else {
            cur = cur.next;     //不相同，正常往下走一步
        }
    }
    return head;
};

