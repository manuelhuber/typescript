"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The spread operator "..." allows
var Arrays = (function () {
    function Arrays() {
    }
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
        // Swap variables
        _a = [two, one], one = _a[0], two = _a[1];
        console.log(one); // 2
        console.log(two); // 1
        var _b = [1, 2, 3, 4], first = _b[0], rest = _b.slice(1);
        console.log(first); // 1
        console.log(rest); // [2, 3, 4]
        var _a;
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
