var kim = {
    name:'jinkyu',
    first:10,
    second:20
};
var lee = {
    name:'hojung',
    first:30,
    second:40
};
function sum (prefix) {
    return prefix + (this.first + this.second);
};
// lee.__proto__ = kim;
sum.call(kim);
sum.call(lee);
console.log("sum.call(kim)", sum.call(kim, '==> ')); //apply
console.log("sum.call(lee)", sum.call(lee, ": "));
var kimSum = sum.bind(kim, "~~> ");
console.log("kimSum()", kimSum());

