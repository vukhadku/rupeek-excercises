let square = x => x*x;
let cube = x=> x*x*x;

let sum = (a,b,transform)=>{
    return transform(a) + transform(b);
}

let result = sum(2,3,square);

console.log(result);