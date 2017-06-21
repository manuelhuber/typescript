export class ClassesShowcase {

    public newInstanceOfClass() : void {
        let howard = new Employee("Howard", "Sales");
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
    }

}

declare interface BaseInterface {
    someProperty : string;
}

export interface MyInterface extends BaseInterface {
    aSecondProperty : boolean;
    multiplyFunction : (a : number, b : number) => number;
    // Optional property with the "?" operator
    justOptional? : number;
}

class Person {
    // accessible everywhere
    public hairStyle : string;

    // Protected is accessible in this class and subclasses
    protected name : string;

    // Private is only accessible in this class
    private nickname : string;

    constructor(name : string) {
        this.name = name;
        this.nickname = name + "y";
        this.hairStyle = "great";
    }

}

class Employee extends Person {

    // A getter - can be read like a property
    public get id() : string {
        return this.name + this.department;
    }

    public get salary() : number {
        return this._salary;
    }

    public set salary(newSalary : number) {
        if (newSalary > 0 && newSalary < 100000) {
            this._salary = newSalary
        } else {
            // no value update
            console.log("Pay the man properly!");
        }
    }

    private _salary : number;

    private department : string;

    constructor(name : string, department : string) {
        super(name);
        this.department = department;
        this.hairStyle = "professional";
    }

    public introduction() {
        // Access to this.name but not this.nickname
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
