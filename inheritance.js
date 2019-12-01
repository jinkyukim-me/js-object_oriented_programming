class Person {
    constructor (name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
   }
   sum() {
       return this.first + this.second;
   }
}

class PersonPlus extends Person {
    constructor (name, first, second, third) {
        super(name, first, second);
        this.third = third;
    }
    sum () {
        return super.sum() + this.third;
    }
    avg() {
        return (this.first + this.second)/3;
    }
}

var kim = new PersonPlus('jinkyu',40,50,60);
console.log(kim.name);  
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());

