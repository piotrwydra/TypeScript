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
var Department = /** @class */ (function () {
    function Department(id, n) {
        this.employees = []; //protected is like private, but can be accessed in inherited classes
        this.id = id;
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department (".concat(this.id, "): ").concat(this.name));
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.createEmployee = function (name) {
        return { name: name };
    };
    return Department;
}());
// an easier way of creating a class (we create properties in constructor method)
var Department2 = /** @class */ (function () {
    function Department2(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department2.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    Department2.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department2.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department2;
}());
// new object with Department class
var accounting = new Department("id1", "Accounting");
// addEmployee method to add employees to the employees array
accounting.addEmployee("Piotr");
accounting.addEmployee("Ibrahim");
// accounting.employees[2] = 'Ciaran'; // it will not work because we set the property as protected (private would also work)
console.log("Accounting variable");
console.log(accounting);
console.log("Displaying describe() method - info about the accounting variable");
accounting.describe();
console.log("printEmployeeInformation() method printing the length of the array and the array itself");
accounting.printEmployeeInformation();
// Inheritance - a "child" class
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var ITDep = new ITDepartment('id1', ['Piotr']);
ITDep.addEmployee("Ciaran");
ITDep.addEmployee("C.J.");
console.log("Displaying ITDep variable");
console.log(ITDep);
// another "child" of Department class
var Accounting = /** @class */ (function (_super) {
    __extends(Accounting, _super);
    function Accounting(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        return _this;
    }
    Accounting.prototype.addReport = function (text) {
        this.reports.push(text);
    };
    Accounting.prototype.getReports = function () {
        console.log(this.reports);
    };
    Accounting.prototype.addEmployee = function (name) {
        if (name === "Piotr") {
            return;
        }
        this.employees.push(name);
    };
    return Accounting;
}(Department));
var accDep = new Accounting('d2', []);
accDep.addReport('Report 1');
console.log("getReports() method displaying reports array of the accDep variable");
accDep.getReports();
accDep.addEmployee("Piotr");
accDep.addEmployee("Rob");
console.log("printEmployeeInformation() method displaying the number and the employees of accDep variable");
accDep.printEmployeeInformation();
var employee1 = Department.createEmployee('John');
console.log(employee1);
//static properties
var Person = /** @class */ (function () {
    function Person(name) {
        Person.numPeople++;
    }
    Person.getNumPeople = function () {
        return this.numPeople;
    };
    Person.numPeople = 0; //static property can be accessed without having the class instantiated, or in another static method
    return Person;
}());
var john = new Person('John');
var jane = new Person('Jane');
console.log("Displaying static numPeople property");
console.log(Person.numPeople); // displaying numPeople property
console.log("displaying numPeople property through the getNumPeople static class");
console.log(Person.getNumPeople()); // displaying numPeople property through the getNumPeople static class
var Person2 = /** @class */ (function () {
    function Person2(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person2;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age) {
        return _super.call(this, name, age) || this;
    }
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.getAge = function () {
        return this.age;
    };
    return Employee;
}(Person2));
var employee = new Employee('Jane', 20);
console.log("Displaying the employee.getName() function");
console.log(employee.getName());
console.log("Displaying the employee.getAge() function");
console.log(employee.getAge());
