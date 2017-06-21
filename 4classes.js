"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ClassesShowcase = (function () {
    function ClassesShowcase() {
    }
    ClassesShowcase.prototype.newInstanceOfClass = function () {
        var howard = new Employee("Howard", "Sales");
        // Public property can be accessed and modified
        howard.hairStyle = "freaky";
        console.log(howard.id); // getter function is accessed like a property
        // howard.id = "foo"; // error, since it's a read only property (no setter function)
        howard.salary = 1;
        howard.salary = 100;
        howard.salary = 123456789; // value won't be updated
        console.log(howard.salary); // 100
        console.log(howard.introduction());
        // console.log(howard.name); // error since it's protected
    };
    return ClassesShowcase;
}());
exports.ClassesShowcase = ClassesShowcase;
var Person = (function () {
    function Person(name) {
        this.name = name;
        this.nickname = name + "y";
        this.hairStyle = "great";
    }
    return Person;
}());
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        _this.hairStyle = "professional";
        return _this;
    }
    Object.defineProperty(Employee.prototype, "id", {
        // A getter - can be read like a property
        get: function () {
            return this.name + this.department;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (newSalary) {
            if (newSalary > 0 && newSalary < 100000) {
                this._salary = newSalary;
            }
            else {
                // no value update
                console.log("Pay the man properly!");
            }
        },
        enumerable: true,
        configurable: true
    });
    Employee.prototype.introduction = function () {
        // Access to this.name but not this.nickname
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee;
}(Person));
