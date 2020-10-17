let numbers = [5,11,13,7,2,31,3,19,23,17,29]

numbers.sort(function (x,y){
    return x-y;
})
console.log(numbers);
numbers.sort(function(x,y){
    return y-x;
});
console.log(numbers)

numbers.push(37)
numbers.splice(numbers.length-2,2);
console.log(numbers)

numbers.splice(3,2,'seven','eleven')
console.log(numbers)


let x= numbers.indexOf(23);
console.log(x);

x=numbers.indexOf(41);
console.log(x);