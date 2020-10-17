/* Lab excersies from    */

let newarr=[1,2,3,4];
console.log(newarr.length)
newarr[0]++;
newarr[newarr.length-1]= newarr[newarr.length-1] + newarr[newarr.length-2];
console.log(newarr)
newarr.push(9);
let newarr1=[];

for(let i=0;i<newarr.length;i++){
    newarr1[i]=newarr[0];
}
 