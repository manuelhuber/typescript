/**
 * Arrays have no fixed length in TS
 */
/**
 * Arrays have no fixed length in TS
 */ export class Arrays {
    /**
     * Basic array operations
     * Initialize, push, pop, concat, slice, splice, shift, unshift, indexOf
     */
    basicOperations() {
        let array;
        // array[ 0 ] = 1; <- Error, array is undefined
        array = []; // create empty array
        array[0] = 1; // [1]
        array.push(2); // [1,2]
        array.push(2); // [1,2,2]
        array.pop(); // [1,2]
        // concat creates new array
        console.log(array = array.concat(3, 4, 5, [6, 7, 8, 9])); // [1,2,3,4,5,6,7,8,9]
        // slice returns part of the array from the given start to (excluding) end index
        console.log(array.slice(2, 5)); // [3,4,5]
        // splice modifies the array. It removes 3 entries (starting from index 2) and returns the deleted elements
        let deletedElements = array.splice(2, 3);
        console.log(deletedElements); // [3,4,5]
        console.log(array); // [1,2,6,7,8,9]
        let previousHead = array.shift(); // removes first element and returns it;
        array.unshift(previousHead); // adds element at the front
        console.log(array.indexOf(2)); // 1
    }
    /**
     * The spread operator for arrays
     */
    spread() {
        let arrayOne = [1, 2, 3];
        let arrayTwo = [4, 5, 6];
        // Spread operator "..." spreads the values of the array
        let myBigArray = [0, ...arrayOne, ...arrayTwo, 7];
        arrayOne = [100, 101, 102]; // this doesn't change the values spread into myBigArray
        console.log(myBigArray); // [0, 1, 2, 3, 4, 5, 6, 7]
        console.log(arrayOne); // [100, 101, 102]
    }
    /**
     * Destructuring arrays to variables
     */
    destructuring() {
        let numbers = [1, 2, 3];
        let [one, two] = numbers;
        console.log(one); // 1
        console.log(two); // 2
        let [first, ...rest] = [1, 2, 3, 4];
        console.log(first); // 1
        console.log(rest); // [2, 3, 4]
    }
    /**
     * Filter
     */
    filter() {
        let duplicates = [1, 1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 6, 7, 8, 8, 9];
        let uniques = duplicates.filter((value, index, array) => {
            return array.indexOf(value) == index;
        });
        console.log(uniques); // [1,2,3,4,5,6,7,8,9]
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let evenNumbers = numbers.filter(num => num % 2 == 0);
        console.log(evenNumbers); // [2,4,6,8]
    }
    /**
     * Map
     */
    map() {
        let data = [
            { name: 'John', salary: 1983 },
            { name: 'Martin', salary: 654 },
            { name: 'Dave', salary: 65584 },
            { name: 'Phil', salary: 3215 }
        ];
        // Unused parameters "index" and "array" could be omitted
        let listOfNames = data.map((value, index, array) => value.name);
        // Map list of names to objects
        let otherData = listOfNames.map((name, index) => {
            return {
                name: name,
                gender: 'male',
                age: 25 + index
            };
        });
    }
    /**
     * Reduce
     */
    reduce() {
        let data = [
            { name: 'John', salary: 1983 },
            { name: 'Martin', salary: 654 },
            { name: 'Dave', salary: 65584 },
            { name: 'Phil', salary: 3215 }
        ];
        // the reduce function needs a function and a starting value as parameter
        // Unused parameters "currentIndex" and "array" could be omitted
        // let reduceFunction : (accumulator : F, value : T, index : number, array : T[]) => F;
        // let startingValue : F;
        // data.reduce(reduceFunction, startingValue)
        let totalSalaryCost = data.reduce((sum, currentValue, currentIndex, array) => {
            return sum + currentValue.salary;
        }, 0);
        let oops = [[1, 2], [3], [4, [5, [6]]]];
        let flatten = (array) => array.reduce((accumulator, currentValue) => accumulator.concat(Array.isArray(currentValue) ? flatten(currentValue) : currentValue), []);
        flatten(oops); // [1,2,3,4,5,6]
    }
}
