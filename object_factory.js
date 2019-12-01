var gamer = {
    name : "jinkyu",
    first : 30,
    second : 50,
    third : 60,
    sum : function () {
        return this.first + this.second + this.third;
    }
}

var person = {
    name : "jisoo",
    first : 10,
    second : 10,
    third : 10,
    sum : function () {
        return this.first + this.second + this.third;
    }
}

console.log("gamer.sum()", gamer.sum());
console.log("person.sum()", person.sum());