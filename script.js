// Callback Function (3 pts)
// TODO: Use the concept of callback functions to search through a phone book to find a recipient's phone number.
let phoneBook = [
    {name: "Alexis", phone: 4082553555}, 
    {name: "Miya", phone: 9830978345},
    {name: "Rei", phone: 6503879023},
    {name: "Sierra", phone: 7642398541},
    {name: "Luke", phone: 5052358753},
    {name: "Ethan", phone: 9248258435}
]

// TODO: Create a function called searchUser() that searches for a recipient or name in the phoneBook.
// Hint: In the searchUser() function, pass callback as a parameter.


function searchUser(callback){
    let name = "Alexis";
    console.log("Searching for " + name + "'s phone number...");
    callback(name);
}


// TODO: Create a callback function called getNumber() that loops through the phoneBook to find the recipient's number.


function getNumber(name){
    let num;
    for(let i = 0; i < phoneBook.length; i++){
        if(phoneBook[i].name == name){
            num = phoneBook[i].phone;
        }
    }
    console.log(name + ": " + num);
}


// TODO: Call the searchUser() function and pass getNumber() as a callback function.

searchUser(getNumber);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Filter Callback Function (2 pts)
// TODO: Use the concept of filter callback functions to get the price of each car listed in the cars array.
let cars = [
    {color: "red", wheels: 3, price: 55000.00}, 
    {color: "blue", wheels: 8, price: 12000.00}, 
    {color: "pink", wheels: 4, price: 90000.00},
    {color: "yellow", wheels: 4, price: 79000.00},
    {color: "green", wheels: 3, price: 20000.00},
    {color: "purple", wheels: 8, price: 46000.00},
    {color: "gray", wheels: 3, price: 81000.00},
    {color: "golden", wheels: 4, price: 130000.00}
]

// TODO: Create a function called getPrices() that takes carPrice as a parameter and prints the car price of each object.

function getPrices(carPrice){
    console.log(carPrice);
}


// TODO: Use the filter() function to filter through the array to get the car price of each car object.

console.log("Fetching all car prices...");
const prices = cars.filter(car => getPrices(car.price));
