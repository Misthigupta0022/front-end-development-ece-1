// -------------------------------
// Promise 1
// -------------------------------
const promise1 = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve({
            id: 2503203100029,
            username: "misthi gupta"
        });
    } else {
        reject(new Error("Data not fetched"));
    }
});


// -------------------------------
// Promise 2
// -------------------------------
const promise2 = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve({
            id: 250320310,
            username: "Adhya Singh"
        });
    } else {
        reject(new Error("Data is not available"));
    }
});


// -------------------------------
// Promise.all()
// -------------------------------
Promise.all([promise1, promise2])
    .then((response) => {
        console.log("Promise.all:", response);
    })
    .catch((error) => {
        console.log("Promise.all Error:", error.message);
    });


// -------------------------------
// Promise.race()
// -------------------------------
Promise.race([promise1, promise2])
    .then((response) => {
        console.log("Promise.race:", response);
    })
    .catch((error) => {
        console.log("Promise.race Error:", error.message);
    });


// -------------------------------
// Promise.allSettled()
// -------------------------------
Promise.allSettled([promise1, promise2])
    .then((response) => {
        console.log("Promise.allSettled:", response);
    })
    .catch((error) => {
        console.log("Promise.allSettled Error:", error.message);
    });


// -------------------------------
// Promise Chaining
// -------------------------------
promise1
    .then((response) => {
        console.log("Promise resolved:", response);

        return response;
    })
    .then((response2) => {
        console.log("Promise resolved successfully:", response2);
    })
    .catch((error) => {
        console.log("Promise Error:", error.message);
    });


// -------------------------------
// Function Returning Promise
// -------------------------------
function fetchUserDataFromServer() {
    return new Promise((resolve, reject) => {
        let success = true;

        if (success) {
            resolve({
                id: 101,
                username: "Diya"
            });
        } else {
            reject(new Error("User data not fetched"));
        }
    });
}


// -------------------------------
// async / await
// -------------------------------
async function fetchUserData() {
    try {
        const user = await fetchUserDataFromServer();

        console.log("User:", user);
    } catch (error) {
        console.log("Error:", error.message);
    }
}


// Call async function
fetchUserData();