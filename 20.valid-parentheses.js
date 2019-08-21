/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const mapper = [];
    mapper['{'] = '}';
    mapper['['] = ']';
    mapper['('] = ')';
    for (let i in s) {
        if (['{', '[', '('].indexOf(s[i]) > -1) { // 如果进来的是一个左括号，直接压入栈
            stack.push(s[i]);
        } else { // 如果是右括号，进行判断
            const peak = stack.pop();// 取出最后一个
            if (s[i] !== mapper[peak]) {// 
                return false;
            }
        }
    }
    if (stack.length > 0) return false;
    return true;
};

