function solve(num1, num2, num3) {
    let numbers = [num1, num2, num3];
    numbers.sort((a, b) => b - a).forEach(a => console.log(a));
  }

