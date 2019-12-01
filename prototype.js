function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function () {
        return this.first + this.second;
    }
}

var kim = new Person('jinkyu',10,20);

kim.sum = function () {
    return 'modified : ' + (this.first + this.second);
}

var park = new Person('juyoung',50,50);

park.sum = function () {
    return 'modified : ' + (this.first + this.second);
}


console.log("kim.sum()", kim.sum());
console.log("park.sum()", park.sum());
