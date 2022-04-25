// creating generics T, array type is T (any type you decide later)

console.log('***');

const setAnArray = <T>(arr: T[]) => {
    return arr[arr.length-1];
};

const l = setAnArray([1, 2, '3', true]);

const l1 = setAnArray(['a', 'b', 'c']);

console.log(l)
console.log(l1)
console.log('***')
console.log('')
console.log('***')
// creating 2 generics, the array can later have 2 data types

const makeArr = <T, Y>(x: T, y: Y): [T, Y] => {
    return [x, y];
}

const w = makeArr(5, 6);
console.log(w)

const v = makeArr('5', '6');
console.log(v)

const q = makeArr('5', 6);
console.log(q)
console.log('***')
console.log('')
console.log('***')

// using generic constraint extends to make sure the object we're passing contains the data we want to use

const makeFullName = <T extends { firstName: string, lastName: string }>(obj: T) => {
    return {
        ...obj,
        fullName: obj.firstName + ' ' +obj.lastName
    };
};

const makeFullName2 = <T extends { firstName: string, lastName: string, age: number}>(obj: T) => {
    return {
        ...obj,
        fullName: obj.firstName + ' ' +obj.lastName + ' ' + obj.age
    };
};

const v3 = makeFullName2(( {firstName: "First", lastName: "Last", age: 21}))

console.log(v3)

const v1 = makeFullName({firstName: 'John', lastName: 'Doe', age: 42})

//const v2 = makeFullName({lastName: 'Doe', age: 42}) //this will not work due to missing firstName

console.log(v1)
console.log('***')
console.log('')
console.log('***')

// using generics with interfaces

interface Tab<T> {
    id: string;
    position: number;
    data: T;
}

type NumberTab = Tab<number>;

/* The line above gives us this result
type NumberTab = {
    id: string;
    position: number;
    data: number;
}
*/

type StringTab = Tab<string>;

/* The line above gives us this result
type StringTab = {
    id: string;
    position: number;
    data: string;
}
 */



// generics with functions

function merge<T, Y>(objA: T, objB: Y ) {
    console.log(objA);
    console.log(objB);
}

merge({hello: 'World!'}, {World: ' hello!'})
console.log('***')
console.log('')
console.log('***')



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

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

console.log(getProperty(x, "a"));
console.log(getProperty(x, "c"));



// Generic classes

class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }
    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Piotr");
textStorage.addItem("Ibrahim");
textStorage.addItem("Jonathan");
console.log(textStorage.getItems());
textStorage.removeItem("Jonathan");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);