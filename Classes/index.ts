class Department {
    private readonly id: string; // readonly means it can't be changed later
    public name: string; //public properties are public by default
    protected employees: string[] = []; //protected is like private, but can be accessed in inherited classes

    constructor(id:string, n: string) {
        this.id = id;
        this.name = n;
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`)
    }
    addEmployee(employee: string) {
        this.employees.push(employee)
    }
    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)

    }

    static createEmployee(name: string) {
        return {name: name}
    }

}

// an easier way of creating a class (we create properties in constructor method)

class Department2 {
    private employees: string[] = [];

    constructor(private id:string, public name: string) {

    }
    describe() {
        console.log('Department: ' + this.name)
    }
    addEmployee(employee: string) {
        this.employees.push(employee)
    }
    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)

    }
}


// new object with Department class

const accounting = new Department("id1", "Accounting");

// addEmployee method to add employees to the employees array

accounting.addEmployee("Piotr");
accounting.addEmployee("Ibrahim");
// accounting.employees[2] = 'Ciaran'; // it will not work because we set the property as protected (private would also work)

console.log("Accounting object")
console.log(accounting);

console.log("Displaying describe() method - info about the accounting variable")
accounting.describe()

console.log("printEmployeeInformation() method printing the length of the array and the array itself")
accounting.printEmployeeInformation()


// Inheritance - a "child" class

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT'); //before we ever access a property of the base class on this in a constructor body, we have to call super
        this.admins = admins;
    }
}

const ITDep = new ITDepartment('id1', ['Piotr'])
ITDep.addEmployee("Ciaran");
ITDep.addEmployee("C.J.");

console.log("Displaying ITDep variable")
console.log(ITDep)

// another "child" of Department class

class Accounting extends Department {


    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');

    }
    addReport(text: string) {
        this.reports.push(text);
    }
    getReports() {
        console.log(this.reports)
    }
    addEmployee(name: string) { // overwriting the inherited class
        if(name === "Piotr") {
            return;
        }
        this.employees.push(name)
    }
}


const accDep = new Accounting('d2', [])

accDep.addReport('Report 1');

console.log("getReports() method displaying reports array of the accDep variable")
accDep.getReports()

accDep.addEmployee("Piotr");
accDep.addEmployee("Rob");

console.log("printEmployeeInformation() method displaying the number and the employees of accDep variable")
accDep.printEmployeeInformation();



const employee1 = Department.createEmployee('John');
console.log(employee1)


//static properties

class Person {
    static numPeople = 0; //static property can be accessed without having the class instantiated, or in another static method
    constructor(name: string) {
        Person.numPeople++;
    }
    static getNumPeople() {
        return this.numPeople;
    }
}
const john = new Person('John');
const jane = new Person('Jane');

console.log("Displaying static numPeople property")
console.log(Person.numPeople); // displaying numPeople property

console.log("displaying numPeople property through the getNumPeople static class")
console.log(Person.getNumPeople()); // displaying numPeople property through the getNumPeople static class






abstract class Person2 { // abstract class cannot be used, can only be extended

    protected constructor(public name: string, public age: number) {

    }
    abstract getName(): string;
    abstract getAge(): number;
}


class Employee extends Person2{
    constructor(name: string, age: number) {
        super(name, age);
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
let employee = new Employee('Jane', 20);

console.log("Displaying the employee.getName() function")
console.log(employee.getName());

console.log("Displaying the employee.getAge() function")
console.log(employee.getAge());