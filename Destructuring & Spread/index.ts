// Destructuring arrays

let employeeInfo: Array<any> = [,24, "Male", true] // New Array with mixed data inside

let [firstName = "first name not specified", age = "age not specified",
    gender="gender not specified", isWorking = "not specified"] = employeeInfo //destructuring the array, having default values

employeeInfo[1] = 25;

age = 26;
//printing destructured array

console.log(firstName)
console.log(age)
console.log(gender)
console.log(isWorking)

const alphabet: Array<string> = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// destructuring all letters, but without a letter "B", using spread
let [...asd] = alphabet

console.log(asd)

// destructuring an object

const person = {
    objectName: "First",
    objectLastName: "Last",
    objectAge: 42,
    objectAddress: {
        city: "Sunderland",
        country: "England"
    }
}

const {objectName, objectAge, objectAddress: {country}} = person

console.log(objectName)
console.log(objectAge)
console.log(country)

function printUser({objectAge:any}) {
    console.log(`Object is ${objectAge} years old`)
}

printUser(person)


// Updating an object with spreading

let user = {
    id: 3,
    name: 'Ron',
}
const id = user.id
const username = user.name
const updatedUser = {id, username, isLoggedIn: true } // get only id or name not both

console.log(updatedUser)

