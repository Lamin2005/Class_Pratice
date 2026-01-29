import { User } from "./interfaces/User";
import { Admin } from "./interfaces/Admin";
import { Editor } from "./interfaces/Editor";


let num: number = 10;

num = 20;

let name: string = "Mya Mya";

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

let people: string;

people = "mgmg";
console.log(people);

let test: number;

test = 10;
console.log(test);

let workers: string[];

workers = ["laminhein"];

let bools: boolean[];

bools = [true, false];

console.log(bools);

console.log(workers);

let testobj: {
  name: string;
  age: number;
  adult: boolean;
};

testobj = {
  name: "mgmg",
  age: 10,
  adult: true,
};

console.log(testobj);

let mixed: (string | boolean)[];

mixed = ["aungaung", true];

console.log(mixed);

//function

let add = (a: number, b: number, c?: number) => {
  console.log(a + b);
  console.log(c);
};

let minus = (a: number, b: number) => {
  return a - b;
};

add(1, 2);

console.log(minus(10, 2));

//Tuple

let myTuple: [number, string, boolean, number, string];

myTuple = [1, "laminhein", true, 21, "Pathein"];

console.log(myTuple);

//Interface


//reopening type

let user: User = {
  name: "La Min Hein",
  age: 21,
  address: "Pathein",
  isLogin: () => {
    return true;
  },
  city: "Kyonmange",
};



let user2: User = {
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






