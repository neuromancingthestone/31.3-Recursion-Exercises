/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, c=0, l=0) {
  if(c === words.length) return l;
  if(l < words[c].length) l = words[c].length;
  return longest(words, c+1, l);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, c=0, retStr="") {
  if(c >= str.length) return retStr;
  retStr += str[c];
  return everyOther(str, c+2, retStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, c=0) {
  if(c === arr.length) return -1;
  if(arr[c] === val) return c;
  return findIndex(arr, val, c+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, c=0, retStr="") {
  if(str.length === retStr.length) return retStr;
  retStr += str.charAt(str.length-c);
  return revString(str, c+1, retStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, str="") {
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
