const numbers = [2, 4 ,9, 10, 45, 67, 8, 90]
console.log(numbers,'boshlanishdagi array')

const evenNumbersFor = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbersFor.push(numbers[i]);
  }
}

console.log(evenNumbersFor, 'juft sonlarga ajratilgan array (for loop)');