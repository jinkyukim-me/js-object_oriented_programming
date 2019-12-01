console.log("Math.PI", Math.PI);
console.log("Math.random()", Math.random());
console.log("Math.floor(4.6)", Math.floor(4.6));

var jinkyuMath = {
    PI : Math.PI,
    random : function () {
        return Math.random();
    },
    floor : function (value) {
        return Math.floor(value);
    }
};

console.group(
    "내가 만들어 본 Object"
);
console.log(
    "jinkyuMath.PI: ", jinkyuMath.PI, "\n",
    "jinkyuMath.floor(4.7): " , jinkyuMath.floor(4.7), "\n",
    "jinkyuMath.random(): ", jinkyuMath.random(), "\n"
);
console.groupEnd(
    "내가 만들어 본 Object"
);
