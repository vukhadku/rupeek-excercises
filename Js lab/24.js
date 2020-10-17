let days= ['sunday','monday','tuesday','wednesday','thrusday','friday','saturday'];

days.forEach(function(item){
    console.log(item);
})

let newarr = days.map(x=> x.length);
console.log(newarr);

let newarr2 = days.filter(x => {
    x=x.trim();
    if (x[0]>='s' && x[0]<='z'){
        return true;
    }
    else return false;
})

console.log(newarr2)

let newarr3= days.filter(x=> {
    if(x.length ==6){
        return true;
    }
    else {
        return false;
    }
})
console.log(newarr3)