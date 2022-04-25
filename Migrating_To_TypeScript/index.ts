type StrNum = number | string

// assigning values (basic data types)
console.log("1. Assigning values (basic data types)")

let number: number = 1;

console.log(number)
console.log(typeof number);

let string: string = "string";

console.log(string);
console.log(typeof string);

let boolean: boolean = true;

console.log(boolean);
console.log(typeof boolean);

// arrays

console.log("2. Arrays")

let array1: string[] = ["string1", "string2", "string3"]

console.log(array1);
console.log(typeof array1);
console.log(array1[0]);

let array2: Array<number | string> = [1, 2, '3']

console.log(array2);
console.log(typeof array2);
console.log(array2[1]);

let array3: (string | number)[] = ["string1", 2]

console.log(array3);
console.log(typeof array3);
console.log("hello" + array3[2]);

let array4: Array<string | number> = [1, "string2", 3]

console.log(array4);
console.log(typeof array4);
console.log(array4[0]);

// tuples

console.log("3. Tuples")

let tuple: [number, string, boolean] = [1, "string", true]


console.log(tuple);
console.log(typeof tuple);

tuple.push(2, "string2", false);
tuple.push(3, "string3");
tuple.push(4, "hello", true)

console.log(tuple);

// enum

console.log("4. Enum")

enum NumberOfElements {
    Pencils = 2,
    Rubbers = 4,
    Computers = 6,
    Hats = 8,
    Bats
}

console.log(NumberOfElements.Hats)

console.log(NumberOfElements);
console.log(typeof NumberOfElements);

enum StringsOfElements {
    One = "one",
    Two = "two",
    Three = "three"
}

console.log(StringsOfElements);
console.log(typeof StringsOfElements);

enum Heterogeneous {
    Number = 1,
    String = "string",
    Mixed = "You can mix numbers and strings"
}

console.log(Heterogeneous)
console.log(typeof Heterogeneous)

// Union

console.log("5. Union")

let code: (string | number | boolean);

code = 123; //true
console.log(code)
console.log(typeof code)

code = "one two three"; //true
console.log(code)
console.log(typeof code)

code = false; //true
console.log(code)
console.log(typeof code)

let code2: string | number;

code2 = 123; //true
console.log(code2)
console.log(typeof code2)

code2 = "true"; //true
console.log(code2)
console.log(typeof code2)

// code2 = true // false

// Any

console.log("6. Any")

let something: any;

something = "Hello";
console.log(something)
console.log(typeof something)

something = 123;
console.log(something)
console.log(typeof something)

something = true;
console.log(something)
console.log(typeof something)

something = [1, 2, 3];
console.log(something)
console.log(typeof something)

let NewArray: any[] = ["string", 1, false]
console.log(NewArray)
console.log(typeof NewArray)

//void - used where function doesn't return any value

console.log("7. Void")

function log(): void {
    console.log("message");
}
log();

// null & undefined

console.log("8. Null & Undefined")

let a = null;
console.log(a);
console.log(typeof a);

let b;
console.log(b)
console.log(typeof b)

// type inference

console.log("9. Type inference")

let c = "text";
// c = 2;// not a string
console.log(c)
console.log(typeof c)

let d = 1;
// d = "number"; // not a number
console.log(d)
console.log(typeof d)

// Type Casting (Assertion)

console.log("10. Type casting (Assertion")

let str: any = "String"

console.log(str)
console.log(typeof str)

let strString = <string>str;

console.log(strString)
console.log(typeof strString)

let alsoStrString = str as string;

console.log(alsoStrString)
console.log(typeof alsoStrString)

let hello: StrNum = 2;