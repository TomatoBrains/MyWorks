//1
/*Write a function largestOdd(arr) that takes an array arr and returns the largest odd number in it. 
If there is no odd numbers, it should print a message to that effect.
Error message: "No odd numbers found"

Input: arr = [2, 3, 4, 6, 7]
Output: 7 */
const sss = numbers => {
    let res = Number.MIN_SAFE_INTEGER;
    for (let n of numbers) {
        if (n > res && n % 2 === 1) {
           res = n
        }
    }
    return res = Number.MIN_SAFE_INTEGER ? 'not found' : res;
  };
  console.log(sss(['a']))

function largestOdd(arr) {
    let x = Math.max.apply(null, arr.filter(function (item) {
        if (item % 2 == 0) {
            return false;
        } else if (item % 2 !== 0) {
            return item;
        }
    }));
    if (x === -Infinity) {
        return 'No odd numbers found';
    } else {
        return x;
    }
};
console.log(largestOdd([2, 4, 124, 6]));
//2
/*Let s be a string that contains a sequence of decimal numbers separated by commas, e.g., s = '1.23,2.4,3.123'. 
Write a function sequenceSum(s) that prints the sum of the numbers in s.
Input: s = '1.1, 2.1, 3.9'
Output: 7.1 */
let s = '1.1,2.1,3.9';
function sequenceSum(s) {
    let sum = 0;
    s.split(',').map(function (item) {
        return +item;
    }).forEach(function (item) {
        return sum += item;
    });
    return sum;
};
console.log(sequenceSum(s))

//3
/*Write a function vowelsNumber(s) that accepts string s as a parameter and counts up the number of vowels contained in the string. 
Valid vowels are: 'a', 'e', 'i', 'o', and 'u'.
Input: s = 'azcbobobegghakl'
Output: 5
Input: s = 'AzcbobObEgghaKL'
Output: 5 */
function abc(a) {
    let b = ['a', 'e', 'i', 'o', 'u'];
    a = a.toLowerCase();
    a = a.split('');
    let c = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] == b[j]) {
                c++;
            }
        }
    }
    return c;
};
console.log(abc('AzcbobObEgghaKL'));

//4

/*Write a function  contains(str1, str2) that accepts two strings str1 and str2 as arguments and returns a boolean True if either string occurs anywhere in the other, 
and False otherwise. Function should be case insensitive.
Input: s1 = 'abcd', s2 = 'bc'
Output: True

Input: s1 = 'ABcd', s2 = 'bC'
Output: True*/

let str1= 'aBcd';
let str2 = 'bC';
function contains(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if (str1.indexOf(str2) > 0) {
        return true
    }
    else {
        return false
    }
}
console.log(contains(str1,str2));

//5
/*Write a function isPalindrome(s) that accepts string s as an argument and returns a boolean True if string reads the same way backwards and forwards. 
The function should be case and spaces insensitive.
Input: s = ‘topot’
Output: True

Input: s = ‘TopOt’
Output: True

Input: s = ‘to pot’
Output: True

Input: s = ‘ropot’
Output: False*/

function isPalindrome(v) {
    v = v.toLowerCase().replace(/\s/g, '');
    let a = v.split('').reverse().join('');
    if (v == a) {
        return true
    }
    else {
        return false;
    }
}
console.log(isPalindrome('t             o  P o    t'));

//6