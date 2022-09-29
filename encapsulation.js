console.log("<<<<<< ENCAPSULATION >>>>>>>>");
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    constructor(name, age, weight, height) {
        super(name, age);
        this.weight = weight;
        this.height = height;
    }
    say() {
        console.log(this.name);
    }
}
const Lan = new Student("Lan", 21, 50, 168);
Lan.age = 90;
class computer {
    constructor(color, model) {
        this.color = color;
        this.model = model;
    }
}
const person1 = new Person("Huy", 21);
const computer1 = new computer("black", "Dell-001");
class PersonX {
    get name() {
        return this._name;
    }
    set name(inputName) {
        if (inputName.length === 0) {
            throw new Error("Bạn không được để trống trường name");
        }
        this._name = inputName;
    }
    sayHi() {
        console.log(`hi everyon, my name is ${this.name}`);
    }
}
const Hoang = new PersonX();
Hoang.age = '15';
Hoang.name = 'Hoang mai';
console.log(Hoang);
console.log(Hoang.name);
Hoang.sayHi();
