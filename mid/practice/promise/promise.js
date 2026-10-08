/*

# Promise States: 

    // pending  -- when the promise is created but not resolved or rejected 
    // resolve  -- when the promise is fulfilled (successful) 
    // reject   -- when the promise fails (rejected)

..:: NOTE: Promise is an asynchronous task 

---

# Promise properties:

    // then() 	 -- if the promise is resolved, then the then() method is called
    // catch() 	 -- if the promise is rejected, then the catch() method is called
    // finally() -- if the promise is resolved or rejected, then the finally() method is called. Always run.

..:: NOTE: Chaining promises: you can chain multiple .then() calls to handle the result of the promise

# Promise Methods: 

    // Promise.all()  -- Waits for all promises to resolve.
    // Promise.race() -- Returns the first settled promise.

*/

function getStudentResult() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const success = true;

            if (success) {
                resolve(
                    {
                        ID: "101",
                        Name: "Rahim",
                        Department: "CSE",
                        Marks: "85",
                    }
                );
            }
            else {
                reject(
                    console.log("Result Processing Failed!!")
                );
            }
        }, 3000)
    });
}

async function displayResult() {
    console.log("Getting student result...");
    try {
        const result = await getStudentResult();
        if (result != null) {
            console.log("Student result received!");
            console.log("ID: ", result.ID);
            console.log("Name: ", result.Name);
            console.log("Department: ", result.Department);
            console.log("Marks: ", result.Marks);
            console.log("Result Processing Completed!");
        }
    }
    catch (error) {
        console.log("Error", error);
    }
}

displayResult();

/*

OUTPUT: 

PS O:\github\AWT_FALL_26-27\mid\practice\promise> node promise.js
Getting student result...
Student result received!
ID:  101
Name:  Rahim
Department:  CSE
Marks:  85
Result Processing Completed!

*/