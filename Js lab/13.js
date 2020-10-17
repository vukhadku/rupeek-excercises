contains = (arr,num)=>{
    let ans = false;
    for(let i=0;i<arr.length;i++){
        if (arr[i]===num){
            ans = true;
            break;
        }
    }
    return ans;
}

let result = contains([1,2,3,4,5],3);
console.log(result);