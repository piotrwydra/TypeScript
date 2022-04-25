"use strict";
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
exports.__esModule = true;
/// <reference path='./namespace.ts'>
var user1;
user1 = {
    name: 'Piotr',
    age: 24,
    greet: function (phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet("Ahoy! I am");
var calc = namespace;
var Person1 = /** @class */ (function () {
    // age = 30;
    function Person1(n) {
        this.name = n;
    }
    Person1.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name);
    };
    return Person1;
}());
var newUser = new Person1("Piotr");
newUser.greet("Hi there! I'm");
var TheGuy = /** @class */ (function () {
    function TheGuy() {
        this.name = "Dude";
        this.age = 30;
    }
    TheGuy.prototype.greet = function (l) {
        console.log("hi, I'm " + this.name + ". I'm " + this.age + " years old. " + l);
    };
    return TheGuy;
}());
var Guy1 = new TheGuy;
Guy1.greet("Nice to meet you!");
var add;
add = function (n1, n2) {
    return n1 + n2;
};
add(2, 4);
var s = { 'enabled': true, 'maximised': false };
console.log(s['enabled']);
console.log(s['maximised']);
var x = { 1: "one", 2: "two" };
console.log(x[1]);
console.log(x[2]);
var Parent = /** @class */ (function () {
    function Parent(n, a) {
        this.name = n;
        this.age = a;
    }
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(n, a, isAdult) {
        var _this = _super.call(this, n, a) || this;
        _this.isAdult = isAdult;
        _this.isAdult = isAdult;
        return _this;
    }
    return Child;
}(Parent));
var Child1 = new Child("Child1", 15, false);
console.log(Child1);
