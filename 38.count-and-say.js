/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    // if (n == 1) return '1'
    // function say(str) {
    //     let reg = /(\d)\1*/g
    //     let result = ''
    //     let result_str = ''
    //     while (result = reg.exec(str)) {
    //         result_str += result[0].length + result[1]
    //     }
    //     return result_str
    // }
    // return say(countAndSay(n - 1))
    if (n === 1) return '1'
    let next = '1'
    let re = /(1{1,}|2{1,}|3{1,}|4{1,}|5{1,}|6{1,}|7{1,}|8{1,}|9{1,})/g
    // let re = /[\d+]+/g
    for (let i = 0; i < n - 1; i++) {
        let arr = next.match(re)
        next = ''
        console.log(i, '--', arr)
        arr.forEach(item => {
            next += item.length + item.charAt(0)
        })
    }
    console.log(next)
    return next
};

countAndSay(8)
