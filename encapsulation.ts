console.log("<<<<<< ENCAPSULATION >>>>>>>>");

// Encapsulation --> Tính đóng gói
// Tính đóng gói của OOP được thể hiện:
/**
 * @. Các properties và methods là đại diện chung cho một kiểu dữ liệu
 * được đóng gói thành các lớp để tiện quản lý và sử dụng.
 *
 * @. Dấu đi những thông tin, phương thức mà không muốn public ra ngoài
 * thông qua trạng thái của các properties, method được định nghĩa.
 *
 * @public: Được truy xuất từ bên ngoài class, được phép sửa
 * @private: Không truy cập được bên ngoài class
 * @protected: Truy cập được từ class con, không truy cập được từ bên ngoài
 * @readonly: Có thể truy cập bên ngoài class, nhưng không thể sửa
 *
 * @getters : Returns the value of a property
 * @Setters : Update value of a property
 *
 * Đối tượng khác không thể truy cập vào lớp đó để thay đổi
 * hoặc thực hiện phương thức trng class đó
 * privat, public, protected, readonly
 * getter/seter--> lý do dùng?
 *  làm 1 ví dụ có tất cả...
 */

// Person Object:
class Person {
  protected name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  readonly weight: number;
  private height: number;
  constructor(name: string, age: number, weight: number, height: number) {
    super(name, age);
    this.weight = weight;
    this.height = height;
  }

  say(): void {
    console.log(this.name);
  }
}

const Lan = new Student("Lan", 21, 50, 168);
Lan.age = 90;
// console.log('My name is:', Lan);

// Computer Object:

class computer {
  color: string;
  model: string;
  constructor(color: string, model: string) {
    this.color = color;
    this.model = model;
  }
}

// Tạo instance từ 2 class trên:

const person1 = new Person("Huy", 21);
const computer1 = new computer("black", "Dell-001");

// console.log(person1);

// Truy cập một biến trạng thái public (mặc định)
// console.log(person1.age);

// Error: Không thể truy cập biến name vì trạng thái private
// console.log(person1.name);

// console.log(computer1);

// Lỗi vì biến age không tồn tại trong type Computer
// console.log(computer1.age)

// Getters & Setters

class PersonX {
  private _name: string;
  public age: string;

  public get name() {
    return this._name;
  }
  
  public set name(inputName: string) {
    if (inputName.length === 0) {
      throw new Error("Bạn không được để trống trường name");
    }
    this._name = inputName
  }

  sayHi() {
    console.log(`hi everyon, my name is ${this.name}`)
  }
}

const Hoang = new PersonX()
Hoang.age = '15'
Hoang.name = 'Hoang mai'


console.log(Hoang)
console.log(Hoang.name)
Hoang.sayHi()
