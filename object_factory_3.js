// function Person() {
//     this.name = "jinkyu",
//     this.first = 10;
//     this.second = 20;
//     this.third = 30;
//     this.sum = function() {
//         return this.first + this.second + this.third;
//     }    
// }

function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function() {
        return this.first + this.second;
    }    
}

var kim = new Person('kim',10,20);
var jin = new Person('jin',20,30);

console.log(kim.name);
console.log("kim.sum()", kim.sum());
console.log(jin.name);
console.log("jin.sum()", jin.sum());
