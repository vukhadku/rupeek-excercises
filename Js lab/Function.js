let name = "John", yearsold=38 , spouse='wife'

const John={
    name,
    age:yearsold,
    [spouse] : 'jane',
    celebratebirthday() {
        this.age++;
    }
};

console.log(John)