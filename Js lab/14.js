function1 = (function2) =>{
    function2();
}

function2 = ()=>{
    console.log("This is a seocnd function")
}

function1(function2);