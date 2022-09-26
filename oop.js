// 1. OOP: Object Oriented Programming --> Lập trình hướng đối tượng
// Là tư tưởng của lập trình viên về việc mô hình hoá, 
// thể hiện các thực thể, đối tượng thực trong cuộc sống vào lập trình

// 2. Đối tượng:
// Trong lập trình hướng đối tượng, để mô tả một đối tượng,
// chúng ta sử dụng các Properties (Thuộc tính) và Methods (Phương thức)
// Thuộc tính để mô tả đặc điểm của đối tượng
// Phương thức để mô tả những hành động mà đối tượng có thể thực hiện

const iPhone11 = {
    color: 'black',
    weight: 300,
    screen: 5,
    takePhoto: ()=> {
        console.log('Take photo >>>>')
    }
}

iPhone11.takePhoto();

// Trong thực tế, tạo đối tượng thường là các instance của một class constructor
// Là việc tổng quát hoá, gom những đặc điểm chung của một loại đối tượng
// tạo ra một bản thiết kế chung (blusprint) cho một loại đối tượng nào đó
// Nhằm tạo một đối tượng cụ thể qua việc
// tận dụng được 4 đặc điểm nổi bật của OOP trong lập trình:
// - Subtraction --> Trừu tượng
// - Encapsulation --> Đóng gói
// - Inheritance --> Kế thừa
// - Polymorphism --> Đa hình