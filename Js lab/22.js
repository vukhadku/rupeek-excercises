sum =(x,y) => x+y;



let bind10 = sum.bind(null,10 );
let bindboth = sum.bind(null,10,20);

console.log(bind10(5));// x is fixed , we only pass y value
console.log(bindboth());