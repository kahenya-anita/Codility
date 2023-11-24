// We call an array switching if all numbers in even positions are equal and all numbers in odd positions are equal.
// For example: [3, -7, 3, -7, 3] and [4, 4, 4] are switching, but [5, 5, 4, 5, 4] and [-3, 2, 3] are not switching.
// What is the length of the longest switching slice (continuous fragment) in a given array A?
// Write a function:
// function solution(A);
// that, given an array A consisting of N integers, returns the length of the longest switching slice in A.
// Examples:
// 1. Given A = [3, 2, 3, 2, 3], the function should return 5, because the whole array
// is switching.
// 2. Given A = 17, 4, -2, 4, -2, -91, the function should return 4. The longest
// switching slice is [4, -2, 4, -2].
// 3. Given A = [7, -5, -5, -5, 7, -1, 7], the function should return 3. There are two
// switching slices of equal length: [-5, -5, -5] and [7, -1, 7].
// 4. Given A = [4], the function should return 1. A single-element slice is also a
// switching slice.
// Write an efficient algorithm for the following assumptions:
// • N is an integer within the range [1.. 100,000];
// • each element of array A is an integer within the range [-1,000,000,000.1,000,000,000].

function solution(A) {
  let even = A[0];
  let odd = A[1];
  let start = 0;
  let maxLen = 0;
  for (let i = 2; i < A.length; ++i) {
    if ((i % 2 === 0 && A[i] !== even) || (i % 2 === 1 && A[i] !== odd)) {
      maxLen = Math.max(maxLen, i - start);
      start = i - 1;
      [even, odd] = [A[i], A[i - 1]];
    }
  }
  return Math.max(maxLen, A.length - start);
}
