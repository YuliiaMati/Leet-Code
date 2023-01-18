/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x.toString().split("").reverse().join("") === x.toString()) {
    return true
  } else {
    return false
  }
}

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
