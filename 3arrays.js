"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The spread operator "..." allows
var Arrays = (function () {
    function Arrays() {
    }
    Arrays.prototype.basicOperations = function () {
        var array;
        // array[ 0 ] = 1; <- Error, array is undefined
        array = []; // create empty array
        array[0] = 1; // [1]
        array.push(2); // [1,2]
        array.push(2);
        array.pop(); // remove last
        console.log(array = array.concat(3, 4, 5, [6, 7, 8, 9])); // concat creates new array
        console.log(array.slice(2, 5)); // new array with entries 3,4,5
        // splice modifies the array. It removes 3 entries (startig from 2) and returns the deleted elements
        var deletedElemets = array.splice(2, 3);
        console.log(deletedElemets); // [3,4,5]
        console.log(array); // [1,2,6,7,8,9]
        var previousHead = array.shift(); // removes first element and returns it;
        array.unshift(previousHead); // adds element at the front
        console.log(array.indexOf(2)); // 1
    };
    Arrays.prototype.spreadArray = function () {
        var arrayOne = [1, 2, 3];
        var arrayTwo = [4, 5, 6];
        var myBigArray = [0].concat(arrayOne, arrayTwo, [7]);
        arrayOne = [100, 101, 102];
        console.log(myBigArray); // [0, 1, 2, 3, 4, 5, 6, 7]
        console.log(arrayOne); // [100, 101, 102]
    };
    Arrays.prototype.deconstructingArrays = function () {
        var numbers = [1, 2, 3];
        var one = numbers[0], two = numbers[1];
        console.log(one); // 1
        console.log(two); // 2
        var _a = [1, 2, 3, 4], first = _a[0], rest = _a.slice(1);
        console.log(first); // 1
        console.log(rest); // [2, 3, 4]
    };
    Arrays.prototype.filter = function () {
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var evenNumbers = numbers.filter(function (num) { return num % 2 == 0; });
        var duplicates = [1, 1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 6, 7, 8, 8, 9];
        // All available parameters for the filter function
        var uniques = numbers.filter(function (value, index, array) {
            // array.indexOf returns the index of the first occurrence of the value
            return array.indexOf(value) == index;
        });
    };
    Arrays.prototype.map = function () {
        var data = [
            { name: 'John', salary: 1983 },
            { name: 'Martin', salary: 654 },
            { name: 'Dave', salary: 65584 },
            { name: 'Phil', salary: 3215 }
        ];
        // Unused parameters "index" and "array" could be omitted
        var listOfNames = data.map(function (value, index, array) { return value.name; });
        // Map list of names to objects
        var otherData = listOfNames.map(function (name, index) {
            return {
                name: name,
                gender: 'male',
                age: 25 + index
            };
        });
    };
    Arrays.prototype.reduce = function () {
        var data = [
            { name: 'John', salary: 1983 },
            { name: 'Martin', salary: 654 },
            { name: 'Dave', salary: 65584 },
            { name: 'Phil', salary: 3215 }
        ];
        // the reduce function needs a function and a starting value as parameter
        // Unused parameters "currentIndex" and "array" could be omitted
        var totalSalaryCost = data.reduce(function (sum, currentValue, currentIndex, array) {
            return sum + currentValue.salary;
        }, 0);
        var oops = [[1, 2], [3], [4, [5, [6]]]];
        var flatten = function (array) { return array.reduce(function (accumulator, currentValue) {
            return accumulator.concat(Array.isArray(currentValue) ? flatten(currentValue) : currentValue);
        }, []); };
        flatten(oops); // [1,2,3,4,5,6]
    };
    return Arrays;
}());
exports.Arrays = Arrays;
