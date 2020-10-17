let square = x => x*x;
let cube = x=> x*x*x;

let sumArray = (arr,transform)=>{
    let sum =0;
    for(let i=0;i<arr.length;i++){
        sum = sum + transform(arr[i])
    }
    return sum;
}

console.log(sumArray([1,2,3,4],square))
console.log(sumArray([1,2,3,4],cube))