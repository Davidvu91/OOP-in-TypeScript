var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("substraction...".toLocaleUpperCase());
// Substraction: Tính trừu tượng:
/**
 * Tính trừu tượng thể hiện qua việc tạo ra một đối tượng ban đầu
 * có thể có một số đặc điểm chung cho nhiều đối tượng khác như là
 * sự mở rộng của nó nhưng bản thân đối tượng ban đầu không có các biện pháp
 * thi hành.
 * TypeScript sử dụng Abstract class và Interface để thể hiện tính trừu tượng
 */
// 1. Abstract class
// Sử dụng từ khoá 'abstract class'
// Phương thức muốn là trừu tượng sử dụng từ khoá "abstract" trước tên hàm
var Phone = /** @class */ (function () {
    function Phone(name, color, weight) {
        this.name = name;
        this.color = color;
        this.weight = weight;
    }
    return Phone;
}());
// Lớp dẫn xuất (extend) từ lớp cha
var Iphone = /** @class */ (function (_super) {
    __extends(Iphone, _super);
    function Iphone(name, color, weight) {
        return _super.call(this, name, color, weight) || this;
    }
    Iphone.prototype.takePhoto = function () {
        console.log("".concat(this.name, " can take photos"));
    };
    Iphone.prototype.sendMail = function () {
        console.log("".concat(this.name, " can send email"));
    };
    return Iphone;
}(Phone));
// Lớp trừu tượng hoặc dẫn xuất có thể dùng để tạo tham chiếu kiểu dữ liệu
// Chỉ có thể tạo một instance từ lớp dẫn xuất
// Không thể tạo một instance từ lớp trừu tượng
var iphone12;
iphone12 = new Iphone("iPhone 12", "black", 300);
console.log(iphone12);
iphone12.takePhoto();
iphone12.sendMail();
var Mercedes = /** @class */ (function () {
    function Mercedes(name) {
        this.name = name;
    }
    Mercedes.prototype.run = function () {
        console.log("".concat(this.name, " run faster than Honda CRV"));
    };
    Mercedes.prototype.playMusic = function () {
        console.log("".concat(this.name, " can play a music recoder"));
    };
    return Mercedes;
}());
// Có thể tham chiếu kiểu dữ liệu là interface
// Không thể tạo một instance từ interface
var maybach;
maybach = new Mercedes('maybachS450');
console.log(maybach);
maybach.playMusic();
