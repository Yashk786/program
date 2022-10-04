function recursionFibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return recursionFibonacci(num - 1) + recursionFibonacci(num - 2);
  }
}

let num = 5;

let arr = [];

for (let i = 0; i < num; i++) {
  arr.push(recursionFibonacci(i));
}

console.log("Input  :", num);
console.log("Output :", arr);
