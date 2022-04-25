// creating generics T, array type is T (any type you decide later)
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log('***');
var setAnArray = function (arr) {
    return arr[arr.length - 1];
};
var l = setAnArray([1, 2, '3', true]);
var l1 = setAnArray(['a', 'b', 'c']);
console.log(l);
console.log(l1);
console.log('***');
console.log('');
console.log('***');
// creating 2 generics, the array can later have 2 data types
var makeArr = function (x, y) {
    return [x, y];
};
var w = makeArr(5, 6);
console.log(w);
var v = makeArr('5', '6');
console.log(v);
var q = makeArr('5', 6);
console.log(q);
console.log('***');
console.log('');
console.log('***');
// using generic constraint extends to make sure the object we're passing contains the data we want to use
var makeFullName = function (obj) {
    return __assign(__assign({}, obj), { fullName: obj.firstName + ' ' + obj.lastName });
};
var makeFullName2 = function (obj) {
    return __assign(__assign({}, obj), { fullName: obj.firstName + ' ' + obj.lastName + ' ' + obj.age });
};
var v3 = makeFullName2(({ firstName: "First", lastName: "Last", age: 21 }));
console.log(v3);
var v1 = makeFullName({ firstName: 'John', lastName: 'Doe', age: 42 });
//const v2 = makeFullName({lastName: 'Doe', age: 42}) //this will not work due to missing firstName
console.log(v1);
console.log('***');
console.log('');
console.log('***');
/* The line above gives us this result
type StringTab = {
    id: string;
    position: number;
    data: string;
}
 */
// generics with functions
function merge(objA, objB) {
    console.log(objA);
    console.log(objB);
}
merge({ hello: 'World!' }, { World: ' hello!' });
console.log('***');
console.log('');
console.log('***');
//  testing Ibrahim's code
/*let capitalLetterName
if (firstName != 'cj') {
    capitalLetterName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
} else {capitalLetterName = "C.J."}

//console.log(capitalLetterName);
const email = 'ibrahim@evidencebased.education';
const firstName = email.split('@',1)[0];
const cptlName = (firstName != 'cj') ? firstName.charAt(0).toUpperCase() + firstName.slice(1) : "C.J.";
console.log(email);
console.log(cptlName);
*/
// Using Type Parameters in Generic Constraint
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
console.log(getProperty(x, "a"));
console.log(getProperty(x, "c"));
// Generic classes
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem("Piotr");
textStorage.addItem("Ibrahim");
textStorage.addItem("Jonathan");
console.log(textStorage.getItems());
textStorage.removeItem("Jonathan");
console.log(textStorage.getItems());
var numberStorage = new DataStorage();
numberStorage.addItem(1);
