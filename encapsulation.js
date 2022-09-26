console.log("<<<<<< ENCAPSULATION >>>>>>>>");
// Encapsulation --> Tính đóng gói
// Tính đóng gói của OOP được thể hiện:
/**
 * @. Các properties và methods là đại diện chung cho một kiểu dữ liệu
 * được đóng gói thành các lớp để tiện quản lý và sử dụng.
 *
 * @. Dấu đi những thông tin, phương thức mà không muốn public ra ngoài
 * thông qua trạng thái của các properties, method được định nghĩa.
 * Đối tượng khác không thể truy cập vào lớp đó để thay đổi
 * hoặc thực hiện phương thức trng class đó
 */
// Person Object:
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
// Computer Object:
var computer = /** @class */ (function () {
    function computer(color, model) {
        this.color = color;
        this.model = model;
    }
    return computer;
}());
// Tạo instance từ 2 class trên:
var person1 = new Person("Huy", 21);
var computer1 = new computer("black", "Dell-001");
console.log(person1);
// Truy cập một biến trạng thái public (mặc định)
console.log(person1.age);
// Error: Không thể truy cập biến name vì trạng thái private
// console.log(person1.name); 
console.log(computer1);
// Lỗi vì biến age không tồn tại trong type Computer
// console.log(computer1.age)
