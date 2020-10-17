let John ={
    name : "John",
    age : 30
}

let Jane = {
    name : "Jane",
    age : 28
}

console.log(John.age);
Jane.age++;
console.log(Jane);

John.address={
    firstline : "18-7",
    city : "New York"
}
console.log(John.address.city)

John.spouse = Jane;
Jane.spouse = John;
Jane.emailids = ["firstemail@email.com","Secondemail@email.com"];
console.log(Jane.emailids[1]);

Jane.emailids[1]="Changeemail@email.com";
console.log(Jane.emailids[1]);

Jane.emailids.push("Thirdemail@email.com");
console.log(Jane.emailids[2]);

John.celebrateBirthday = function (){
    this.age ++;
} 
John.celebrateBirthday();
console.log(John)