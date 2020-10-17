addto = (x) =>{
    return (z = (a)=> a+x);
}
let addto10 = addto(10);
console.log(addto10(5));