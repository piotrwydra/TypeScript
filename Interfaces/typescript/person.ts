interface Person{
    name: string;
    age: number;
    address?: string;   // Optional property - address can exist, but doesn't have to.

    greet(phrase: string): void;
}

export {Person}