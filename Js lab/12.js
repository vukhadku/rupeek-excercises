sumSquare = (arr)=>{
    let square=[];
    for(let i=0;i<arr.length;i++){
        square.push(arr[i]*arr[i])
    }
    return square;
}

let square = sumSquare([1,2,3,4]);
console.log(square);