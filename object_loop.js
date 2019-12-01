var memberArray = ['jinkyu','seocho','kaist'];

console.group("while statement - Array");
var i = 0;
while (i < memberArray.length) {
    console.log(i, memberArray[i]);
    i = i + 1;
}
console.groupEnd("while statemnet - Array");

var memberObject = {
    'name' : 'jinkyu',
    'region' : 'seocho',
    'school' : 'kaist'
}

console.group("object loop");
for (var k in memberObject) {
    console.log(memberObject[k], k);
}
console.groupEnd("object loop");

console.log("memberObject['name']의 값은 : ", memberObject['name']);
console.log("memberObject['region']의 값은 : ", memberObject['region']);
console.log("memberObject['school']의 값은 : ", memberObject['school']);


