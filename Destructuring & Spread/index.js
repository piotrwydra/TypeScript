// Destructuring arrays
var employeeInfo = [, 24, "Male", true]; // New Array with mixed data inside
var _a = employeeInfo[0], firstName = _a === void 0 ? "first name not specified" : _a, _b = employeeInfo[1], age = _b === void 0 ? "age not specified" : _b, _c = employeeInfo[2], gender = _c === void 0 ? "gender not specified" : _c, _d = employeeInfo[3], isWorking = _d === void 0 ? "not specified" : _d; //destructuring the array, having default values
employeeInfo[1] = 25;
age = 26;
//printing destructured array
console.log(firstName);
console.log(age);
console.log(gender);
console.log(isWorking);
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// destructuring all letters, but without a letter "B", using spread
var asd = alphabet.slice(0);
console.log(asd);
// destructuring an object
var person = {
    objectName: "First",
    objectLastName: "Last",
    objectAge: 42,
    objectAddress: {
        city: "Sunderland",
        country: "England"
    }
};
var objectName = person.objectName, objectAge = person.objectAge, country = person.objectAddress.country;
console.log(objectName);
console.log(objectAge);
console.log(country);
function printUser(_a) {
    var any = _a.objectAge;
    console.log("Object is ".concat(objectAge, " years old"));
}
printUser(person);
// Updating an object with spreading
var user = {
    id: 3,
    name: 'Ron'
};
var id = user.id;
var username = user.name;
var updatedUser = { id: id, username: username, isLoggedIn: true }; // get only id or name not both
console.log(updatedUser);
