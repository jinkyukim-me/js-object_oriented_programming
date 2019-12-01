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
    this.name = name,
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function() {
        return this.first + this.second + this.third;
    }    
}

var kim = new Person('kim',10,20,30);
var jin = new Person('jin',20,30,40);

console.log("kim.sum()", kim.sum());
console.log("jin.sum()", jin.sum());
