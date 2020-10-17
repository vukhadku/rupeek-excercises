sumarray = (arr)=> {
    let sum =0;
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    return sum;
}

let result = sumarray([1,2,3,3,4,5,6,7,8,9,10])

console.log(result)
