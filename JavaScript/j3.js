let numbers=[1,2,3,4,5,6,7,7];
numbers.unshift(0);
console.log(numbers);
console.log(numbers.pop());
console.log(numbers.push(8));
numbers.splice(0,4);
console.log(numbers);
console.log(numbers.length);
numbers.forEach(n => {
    console.log(n*2)
})