/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let r = x.toString().split("")
  for (i = 0; i < Math.floor(r.length / 2); i++) {
    if (r[i] !== r[r.length - 1 - i]) {
      return false
    }
  }
  return true
}

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
console.log(isPalindrome(0))
console.log(isPalindrome(1231))
console.log(isPalindrome(1001))
