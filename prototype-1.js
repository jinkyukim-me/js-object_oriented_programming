function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
}

Person.prototype.sum = function () {
    return "prototype's result: " + (this.first + this.second);
}

var kim = new Person('jinkyu',10,20);
kim.sum = function () {
    return "this : " + (this.first + this.second);
}

var park = new Person('juyoung',50,50);


console.log("kim.sum()", kim.sum());
console.log("park.sum()", park.sum());
