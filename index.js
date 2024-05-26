"use strict";
//Day 11
//Question 31
let username = [];
if (username.length === 0) {
    console.log(`List is empty we need to find other users`);
}
;
//Question 32
let currentUser = ["Fatima", "Alishba", "Mehak"];
let newUser = ["Admin", "Ilma", "Mehak"];
newUser.forEach(user => {
    if (currentUser.some(currentUser => currentUser.toLowerCase() === user.toLowerCase())) {
        console.log(`${user} will need to enter a new username.`);
    }
    else {
        console.log(`${user} is available.`);
    }
});
//Question 32
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
number.forEach(num => {
    let suffix = "th";
    if (num === 1) {
        suffix === "th";
    }
    else if (num === 2) {
        suffix === "nd";
    }
    else if (num === 3) {
        suffix === "rd";
    }
    console.log(`${num}${suffix}`);
});
