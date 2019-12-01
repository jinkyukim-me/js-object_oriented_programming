var superObj = {
    superVal : 'super'
};

// var subObj = {
//     subVal : 'sub'
// };

var subObj = Object.create(superObj);
subObj.subVal = 'sub'
// debugger;
console.log("superObj.superVal => ", superObj.superVal);
console.log("subObj.subVal => ", subObj.subVal);
console.log("subObj.superVal => ", subObj.superVal);


// subObj.__proto__ = superObj;
console.log();
console.log("superObj.superVal => ", superObj.superVal);
console.log("subObj.subVal => ", subObj.subVal);
console.log("subObj.superVal => ", subObj.superVal);


var kim = {
    name : 'jinkyu',
    first : 10,
    second : 30,
    sum : function() {
        return this.first + this.second
    }
}
var lee = Object.create(kim);
lee.name = "jun";
lee.first = 40;
lee.second = 10;
lee.avg = function () {
    return (this.first + this.second)/2;
}


// var lee = {
//     name : 'jun',
//     first: 40,
//     second : 10,
//     avg : function () {
//         return (this.first + this.second)/2
//     }
// }
// lee.__proto__ = kim;

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());
console.log("lee.avg()", lee.avg());