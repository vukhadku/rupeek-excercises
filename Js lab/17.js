exponentfactory = (x)=>{
    if (x===2){
        return (square = x=>x*x)
    }
    else if( x===3){
        return (cube = x =>x*x*x)
    }
    else {
        return (same =x=>x)
    }
}
let fn = exponentfactory(2)
console.log(fn(5));
fn = exponentfactory(4)
console.log(fn(5));