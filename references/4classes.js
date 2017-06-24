export class ClassesShowcase {
    newInstanceOfClass() {
        let howard = new Employee("Howard", "sales");
        // Public property can be accessed and modified
        howard.hairStyle = "freaky";
        console.log(howard.id); // getter function is accessed like a property
        // howard.id = "foo"; // error, since it's a read only property (no setter function)
        howard.salary = 1;
        howard.salary = 100;
        howard.salary = 123456789; // value won't be updated (see setter function)
        console.log(howard.salary); // 100
        console.log(howard.introduction()); // 'Hello, my name is Howard and I work in sales.`
        // console.log(howard.name); // error since it's protected
        let interfaceConform = {
            someProperty: 'string',
            aSecondProperty: false,
            multiplyFunction: (a, b) => a + b
        };
    }
}
/**
 * A class with public, protected and private properties
 */
class Person {
    constructor(name) {
        // Class level properties and functions are accessed with the "this" keyword
        this.name = name;
        this.nickname = name + "y";
        this.hairStyle = "great";
    }
}
/**
 * Extending another class, accessing their properties, getter / setter functions
 */
class Employee extends Person {
    // A getter - can be read like a property
    get id() {
        return this.name + this.department;
    }
    get salary() {
        return this._salary;
    }
    set salary(newSalary) {
        if (newSalary > 0 && newSalary < 100000) {
            this._salary = newSalary;
        }
        else {
            // no value update
            console.log("Pay the man properly!");
        }
    }
    constructor(name, department) {
        super(name);
        this.department = department;
        this.hairStyle = "professional";
    }
    /**
     * String templating
     */
    introduction() {
        // Access to this.name but not this.nickname
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
