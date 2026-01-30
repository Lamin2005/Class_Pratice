let num = 10;
num = 20;
let name = "Mya Mya";
name = "Mg Mg";
//console.log(name);
let array = ["lamin", "mgmg", "mama"];
array.push("aungaung");
//console.log(array);
//let mixed = ['aungaung','mgmg',10,20];
//mixed.push('laminhein');
//mixed.push(30);
//console.log(mixed);
let obj = {
    name: "laminhein",
    age: 20,
    adult: true,
};
obj.name = "aungaung";
//console.log(obj);
//Explicit Types
let people;
people = "mgmg";
console.log(people);
let test;
test = 10;
console.log(test);
let workers;
workers = ["laminhein"];
let bools;
bools = [true, false];
console.log(bools);
console.log(workers);
let testobj;
testobj = {
    name: "mgmg",
    age: 10,
    adult: true,
};
console.log(testobj);
let mixed;
mixed = ["aungaung", true];
console.log(mixed);
//function
let add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
let minus = (a, b) => {
    return a - b;
};
add(1, 2);
console.log(minus(10, 2));
//Tuple
let myTuple;
myTuple = [1, "laminhein", true, 21, "Pathein"];
console.log(myTuple);
//reopening type
let user = {
    name: "La Min Hein",
    age: 21,
    address: "Pathein",
    isLogin: () => {
        return true;
    },
    city: "Kyonmange",
};
let user2 = {
    name: "Mg Mg",
    age: 20,
    address: "Yangon",
    isLogin: () => {
        return false;
    },
    city: "SaungChang",
};
//extends interface
console.log(user);
console.log(user2);
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let Drive = (dir) => {
    if (dir === Direction.Up) {
        console.log("Car is Dirving Up...");
    }
    else if (dir === Direction.Down) {
        console.log("Car is Dirving Down...");
    }
    else if (dir === Direction.Left) {
        console.log("Car is Dirving Left...");
    }
    else if (dir === Direction.Right) {
        console.log("Car is Dirving Right...");
    }
};
Drive(Direction.Down);
console.log(Direction.Down);
let info = (name, age) => {
    console.log(`My name is ${name} and i am ${age} year old.`);
};
let maininfo = (obj) => {
    console.log(`My name is ${obj.name} and i am ${obj.age} year old and my job is ${obj.job}.`);
    console.log(obj.adult);
};
info("laminhein", 21);
maininfo({
    name: "laminhein",
    age: 20,
    job: "FullStack-Developer",
    adult: true,
});
let newObj = {
    name: "Aung Aung",
    age: 25,
    role: "Admin",
};
//Classes Pratice
class InfoDetails {
    name;
    age;
    job;
    constructor(x, y, z) {
        this.name = x;
        this.age = y;
        this.job = z;
    }
    getDetails() {
        console.log(`My name is ${this.name} and i am ${this.age} old and my job is ${this.job}.`);
    }
}
let laminhein = new InfoDetails("laminhein", 20, "Developer");
console.log(laminhein.getDetails());
let kyawkyaw = new InfoDetails("kyawkyaw", 18, "Student");
console.log(kyawkyaw.getDetails());
let arr = [];
console.log(laminhein.age);
arr.push(laminhein);
arr.push(kyawkyaw);
console.log(arr);
export {};
//# sourceMappingURL=index.js.map