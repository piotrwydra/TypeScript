import {Person} from './person'
import Greetable from "./Greetable";
/// <reference path='./namespace.ts'>

let user1: Person;

user1 = {
    name: 'Piotr',
    age: 24,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name)
    }
};

user1.greet("Ahoy! I am")

let calc = namespace







class Person1 implements Greetable {
    // class implements an interface with duck typing, which is a method used to ensure that the type is compatible
    // (we ensure that our class uses the types we created in the interface

    name: string
    // age = 30;

    constructor(n: string) {
        this.name = n
    }
    greet(phrase: string) {
        console.log(phrase + " " + this.name)
    }
}

const newUser = new Person1("Piotr");

newUser.greet("Hi there! I'm")



interface MustAge extends Greetable { // Extending an interface, now MustAge also requires what Greetable does.
    age: number;
}

class TheGuy implements MustAge {
    name = "Dude";
    age= 30;

    greet(l: string) {
        console.log("hi, I'm " + this.name + ". I'm " + this.age + " years old. " + l)
    }
}

const Guy1 = new TheGuy;
Guy1.greet("Nice to meet you!")



interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}

add(2, 4)
// add("number", 2) // won't work due to not having 2 numbers


//indexable types
interface States {
    [state: string]: boolean; // indexer, only works on strings and numbers
}

let s: States = {'enabled': true, 'maximised':false};
console.log(s['enabled']);
console.log(s['maximised']);


interface States2 {
    [state: number]: string; // indexer, only works on strings and numbers
}

let x: States2 = {1: "one", 2: "two"};
console.log(x[1]);
console.log(x[2]);

interface rule {
    name: string,
    age: number,
    isAdult: boolean
}

class Parent {
    name: string;
    age: number

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }
}

class Child extends Parent implements rule {

    constructor(n: string, a: number, public isAdult: boolean) {
        super(n, a);
        this.isAdult = isAdult
    }
}


const Child1 = new Child("Child1", 15, false)

console.log(Child1)