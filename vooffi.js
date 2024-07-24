/**
 * Generates a key function to be used in sorting or mapping data.
 *
 * @param {string} property - The property of the object to use as the key.
 * @returns {function} - A key function that can be used for sorting or mapping.
 */
function generateKeyFunction(property) {
    return function(obj) {
        return obj[property];
    };
}

// Example usage:
const data = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

// Sort the data by name using the generated key function
const sortedByName = data.sort(generateKeyFunction('name'));

// Map the data to only include names using the generated key function
const mappedNames = data.map(generateKeyFunction('name'));

console.log(sortedByName);
console.log(mappedNames);
