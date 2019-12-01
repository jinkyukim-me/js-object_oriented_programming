var memberArray = ['jinkyu','seocho','kaist'];
console.log("배열에서의 index")
console.log("memberArray[0]의 값은 : ", memberArray[0]);
console.log("memberArray[1]의 값은 : ", memberArray[1]);
console.log("memberArray[2]의 값은 : ", memberArray[2]);
console.log("memberArray[3]의 값은 : ", memberArray[3]);

var memberObject = {
    'name' : 'jinkyu',
    'region' : 'seocho',
    'school' : 'kaist'
}

// // 두 가지 표현 가능함
// var memberObject = {
//     name : 'jinkyu',
//     region : 'seocho',
//     school : 'kaist'
// }

console.log("객체의 기본적인 사용법")
console.log("객체에서의 '.' 사용")
console.log("memberObject.name의 값은 : ", memberObject.name);
console.log("memberObject.raegion의 값은 : ", memberObject.region);
console.log("memberObject.school의 값은 : ", memberObject.school);
console.log("memberObject.address의 값은 : ", memberObject.address);
console.log()
console.log("객체에서의 '[]' 사용")
console.log("memberObject['name']", memberObject['name'])
console.log("memberObject['region']", memberObject['region'])
console.log("memberObject['school']", memberObject['school'])

memberObject.region = 'sechoGu'
console.log("memberObject.raegion의 값은 : ", memberObject.region);

delete memberObject.name
console.log("after delete, memberObject.name의 값은 : ", memberObject.name)


