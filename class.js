class Person {
     constructor (name, first, second) {
         this.name = name;
         this.first = first;
         this.second = second;
    }
    sum() {
        return "prototype's result: " + (this.first + this.second);
    }
}
var kim = new Person('jinkyu', 10, 20);
var park = new Person('juyoung',50,50)

kim.sum = function () {
    return "this : " + (this.first + this.second);
}

console.log('kim', kim);
console.log("kim.sum()", kim.sum());
console.log('park', park)
console.log("park.sum()", park.sum());





