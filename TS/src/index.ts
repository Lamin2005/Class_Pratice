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

//Enum

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let Drive = (dir: 0 | 1 | 2 | 3): void => {
  if (dir === Direction.Up) {
    console.log("Car is Dirving Up...");
  } else if (dir === Direction.Down) {
    console.log("Car is Dirving Down...");
  } else if (dir === Direction.Left) {
    console.log("Car is Dirving Left...");
  } else if (dir === Direction.Right) {
    console.log("Car is Dirving Right...");
  }
};

Drive(Direction.Down);

console.log(Direction.Down);

//Type Aliases

type name = string;
type age = number;
type obj = {
  name: name;
  age: age;
  job: string;
  adult?: string | boolean;
};

let info = (name: name, age: age): void => {
  console.log(`My name is ${name} and i am ${age} year old.`);
};

let maininfo = (obj: obj): void => {
  console.log(
    `My name is ${obj.name} and i am ${obj.age} year old and my job is ${obj.job}.`,
  );

  console.log(obj.adult);
};

info("laminhein", 21);
maininfo({
  name: "laminhein",
  age: 20,
  job: "FullStack-Developer",
  adult: true,
});

let newObj: {
  name: string;
  readonly age: number;
  role: string;
} = {
  name: "Aung Aung",
  age: 25,
  role: "Admin",
};

//Classes Pratice

class InfoDetails {
  private name: string;
  readonly age: number;
  job: string;

  constructor(x: string, y: number, z: string) {
    this.name = x;
    this.age = y;
    this.job = z;
  }

  getDetails() {
    console.log(
      `My name is ${this.name} and i am ${this.age} old and my job is ${this.job}.`,
    );
  }
}

let laminhein = new InfoDetails("laminhein", 20, "Developer");
console.log(laminhein.getDetails());
let kyawkyaw = new InfoDetails("kyawkyaw", 18, "Student");
console.log(kyawkyaw.getDetails());

let arr : InfoDetails[]  = [];

console.log(laminhein.age);


arr.push(laminhein);
arr.push(kyawkyaw);

console.log(arr);



