function foo(){
    console.log(this)
}

foo()

john = { x:1}

let foo1 = foo.bind(john);
foo1();