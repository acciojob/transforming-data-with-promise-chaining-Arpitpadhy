//your JS code here. If required.
// Get references to DOM elements
const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

// Utility function to create a delayed promise
function delayedPromise(value, delay, transformFn, messagePrefix) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = transformFn ? transformFn(value) : value;
            output.innerHTML += `<p>${messagePrefix} ${result}</p>`;
            resolve(result);
        }, delay);
    });
}

// Event listener for button click
button.onclick = function () {
    output.innerHTML = ""; // Clear previous results
    const num = Number(input.value);

    // Promise chain
    delayedPromise(num, 2000, null, "Result:") // Step 1: Initial number
        .then((res) => delayedPromise(res, 2000, (x) => x * 2, "Result:")) // Step 2: Multiply by 2
        .then((res) => delayedPromise(res, 1000, (x) => x - 3, "Result:")) // Step 3: Subtract 3
        .then((res) => delayedPromise(res, 1000, (x) => x / 2, "Result:")) // Step 4: Divide by 2
        .then((res) => delayedPromise(res, 1000, (x) => x + 10, "Final Result:")); // Step 5: Add 10
};
