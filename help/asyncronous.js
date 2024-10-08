// ---------------- CALLBACKS ----------------


// callback = a function that is passed as an argument
//            to another function.

// walk -> clean -> takout;

function walkDog(callback) {
    setTimeout(() => {
        console.log("You walk the dog");
        callback();
    }, 1500);
}

function cleanKitchen(callback) {
    setTimeout(() => {
        console.log("You clean the kitchen");
        callback();
    }, 2500);
}

function takeOutTrash(callback) {
    setTimeout(() => {
        console.log("You take out the trash");
        callback();
    }, 500);
}

walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => {
            console.log("All done");
        });
    });
});


// ---------------- PROMISES ----------------

// Promise = An Object that manages asynchronous operations.
//           Wrap a Promise Object around {asynchronous code}
//           "I promise to return a value"

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let walked = false;
            if (walked) {
                resolve("You walk the dog");
            } else {
                reject("You have not walked the dog");
            }
        }, 500);
    });
}

function cleanHouse() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let cleaned = true;
            if (cleaned) {
                resolve("You clean the house");
            } else {
                reject("You have not cleaned the house");
            }
        }, 1500);
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let taked = true;
            if (taked) {
                resolve("You take the trash out");
            } else {
                reject("You havent taked the trash out");
            }
        }, 3000);
    });
}

takeOutTrash()
    .then(value => { console.log(value); return walkDog(); })
    .then(value => { console.log(value); return cleanHouse(); })
    .then(value => { console.log(value); console.log("All done");})
    .catch(error =>  { console.error(error); }); 


// ---------------- ASYNC / AWAIT ----------------

// Async/Await = Async = makes a function return a promise
//               Await = makes an async function wait for a promise

// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let walked = true;
            if (walked) {
                resolve("You walk the dog");
            } else {
                reject("You have not walked the dog");
            }
        }, 1500);
    });
}

function cleanHouse() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let cleaned = true;
            if (cleaned) {
                resolve("You clean the house");
            } else {
                reject("You have not cleaned the house");
            }
        }, 500);
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let taked = true;
            if (taked) {
                resolve("You take the trash out");
            } else {
                reject("You havent taked the trash out");
            }
        }, 3000);
    });
}

async function doChores() {
    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanHouseResult = await cleanHouse();
        console.log(cleanHouseResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    } catch (error) {
        console.error(error);
    }
}

doChores();

// ---------------- CLASSICAL FETCH ----------------

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Could not fetch")
//         }
//         return response.json();
//     })
//     .then(data => console.log(data.weight))
//     .catch(error => console.error(error));
