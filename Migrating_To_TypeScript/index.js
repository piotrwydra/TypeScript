// assigning values (basic data types)
console.log("1. Assigning values (basic data types)");
var number = 1;
console.log(number);
console.log(typeof number);
var string = "string";
console.log(string);
console.log(typeof string);
var boolean = true;
console.log(boolean);
console.log(typeof boolean);
// arrays
console.log("2. Arrays");
var array1 = ["string1", "string2", "string3"];
console.log(array1);
console.log(typeof array1);
console.log(array1[0]);
var array2 = [1, 2, '3'];
console.log(array2);
console.log(typeof array2);
console.log(array2[1]);
var array3 = ["string1", 2];
console.log(array3);
console.log(typeof array3);
console.log("hello" + array3[2]);
var array4 = [1, "string2", 3];
console.log(array4);
console.log(typeof array4);
console.log(array4[0]);
// tuples
console.log("3. Tuples");
var tuple = [1, "string", true];
console.log(tuple);
console.log(typeof tuple);
tuple.push(2, "string2", false);
tuple.push(3, "string3");
tuple.push(4, "hello", true);
console.log(tuple);
// enum
console.log("4. Enum");
var NumberOfElements;
(function (NumberOfElements) {
    NumberOfElements[NumberOfElements["Pencils"] = 2] = "Pencils";
    NumberOfElements[NumberOfElements["Rubbers"] = 4] = "Rubbers";
    NumberOfElements[NumberOfElements["Computers"] = 6] = "Computers";
    NumberOfElements[NumberOfElements["Hats"] = 8] = "Hats";
    NumberOfElements[NumberOfElements["Bats"] = 9] = "Bats";
})(NumberOfElements || (NumberOfElements = {}));
console.log(NumberOfElements.Hats);
console.log(NumberOfElements);
console.log(typeof NumberOfElements);
var StringsOfElements;
(function (StringsOfElements) {
    StringsOfElements["One"] = "one";
    StringsOfElements["Two"] = "two";
    StringsOfElements["Three"] = "three";
})(StringsOfElements || (StringsOfElements = {}));
console.log(StringsOfElements);
console.log(typeof StringsOfElements);
var Heterogeneous;
(function (Heterogeneous) {
    Heterogeneous[Heterogeneous["Number"] = 1] = "Number";
    Heterogeneous["String"] = "string";
    Heterogeneous["Mixed"] = "You can mix numbers and strings";
})(Heterogeneous || (Heterogeneous = {}));
console.log(Heterogeneous);
console.log(typeof Heterogeneous);
// Union
console.log("5. Union");
var code;
code = 123; //true
console.log(code);
console.log(typeof code);
code = "one two three"; //true
console.log(code);
console.log(typeof code);
code = false; //true
console.log(code);
console.log(typeof code);
var code2;
code2 = 123; //true
console.log(code2);
console.log(typeof code2);
code2 = "true"; //true
console.log(code2);
console.log(typeof code2);
// code2 = true // false
// Any
console.log("6. Any");
var something;
something = "Hello";
console.log(something);
console.log(typeof something);
something = 123;
console.log(something);
console.log(typeof something);
something = true;
console.log(something);
console.log(typeof something);
something = [1, 2, 3];
console.log(something);
console.log(typeof something);
var NewArray = ["string", 1, false];
console.log(NewArray);
console.log(typeof NewArray);
//void - used where function doesn't return any value
console.log("7. Void");
function log() {
    console.log("message");
}
log();
// null & undefined
console.log("8. Null & Undefined");
var a = null;
console.log(a);
console.log(typeof a);
var b;
console.log(b);
console.log(typeof b);
// type inference
console.log("9. Type inference");
var c = "text";
// c = 2;// not a string
console.log(c);
console.log(typeof c);
var d = 1;
// d = "number"; // not a number
console.log(d);
console.log(typeof d);
// Type Casting (Assertion)
console.log("10. Type casting (Assertion");
var str = "String";
console.log(str);
console.log(typeof str);
var strString = str;
console.log(strString);
console.log(typeof strString);
var alsoStrString = str;
console.log(alsoStrString);
console.log(typeof alsoStrString);
var hello = 2;
