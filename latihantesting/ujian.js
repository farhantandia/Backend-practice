let myVariable = 12;
myVariable = 30;
myVariable = 5;

console.log(myVariable);

const firstString = "Hello";
const secondString = "JavaScript";

console.log(firstString + secondString);

if ((true || false) && (false || false)) {
    console.log("It's true");
} else {
    console.log("It's false");
}
const oneTwoThree = [1, 2, 3];
const sevenEightNine = [7, 8, 9,1,2,3,4];

//const result = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];

console.log(sevenEightNine[6]);

function multiply(num) {
    total = num * num;
}

const result = multiply(3);

console.log(result);

class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyError";
    }
}

try {
    throw new MyCustomError("This is an error");
} catch (e) {
    console.log(e.message);
}
function fetchUsername() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('JSUser');
        }, 3000);
    })
}

console.log("Fetching username...");
const username = fetchUsername();
console.log(`You are logged in as ${username}`);
console.log("Welcome!");