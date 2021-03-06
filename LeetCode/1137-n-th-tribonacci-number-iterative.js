// https://leetcode.com/problems/n-th-tribonacci-number/

function tribonacci(n) {
  let arr = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2] + arr[i - 3]);
  }
  return arr[n];
};