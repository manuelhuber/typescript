// The spread operator "..." allows
export class Arrays {

    public spreadArray() : void {
        let arrayOne : number[] = [ 1, 2, 3 ];
        let arrayTwo : number[] = [ 4, 5, 6 ];
        let myBigArray : number[] = [ 0, ...arrayOne, ...arrayTwo, 7 ];
        arrayOne = [ 100, 101, 102 ];
        console.log(myBigArray); // [0, 1, 2, 3, 4, 5, 6, 7]
        console.log(arrayOne); // [100, 101, 102]
    }

    public deconstructingArrays() : void {
        let numbers : number[] = [ 1, 2, 3 ];
        let [ one, two ] : number[] = numbers;
        console.log(one); // 1
        console.log(two); // 2
        // Swap variables
        [ one, two ] = [ two, one ];
        console.log(one); // 2
        console.log(two); // 1

        let [ first, ...rest ] : number[] = [ 1, 2, 3, 4 ];
        console.log(first); // 1
        console.log(rest); // [2, 3, 4]
    }

    public filter() : void {
        let numbers : number[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
        let evenNumbers : number[] = numbers.filter(num => num % 2 == 0);

        let duplicates : number[] = [ 1, 1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 6, 7, 8, 8, 9 ];
        // All available parameters for the filter function
        let uniques : number[] = numbers.filter((value, index, array) => {
            // array.indexOf returns the index of the first occurrence of the value
            return array.indexOf(value) == index;
        });
    }

    public map() : void {
        let data : any [] = [
            {name: 'John', salary: 1983},
            {name: 'Martin', salary: 654},
            {name: 'Dave', salary: 65584},
            {name: 'Phil', salary: 3215} ];

        // Unused parameters "index" and "array" could be omitted
        let listOfNames = data.map((value, index, array) => value.name);

        // Map list of names to objects
        let otherData : any[] = listOfNames.map((name, index) => {
            return {
                name: name,
                gender: 'male',
                age: 25 + index
            };
        });
    }

    public reduce() : void {
        let data : any [] = [
            {name: 'John', salary: 1983},
            {name: 'Martin', salary: 654},
            {name: 'Dave', salary: 65584},
            {name: 'Phil', salary: 3215} ];

        // the reduce function needs a function and a starting value as parameter
        // Unused parameters "currentIndex" and "array" could be omitted
        let totalSalaryCost = data.reduce((sum, currentValue, currentIndex, array) => {
            return sum + currentValue.salary;
        }, 0);

        let oops = [ [ 1, 2 ], [ 3 ], [ 4, [ 5, [ 6 ] ] ] ];
        let flatten = (array : any[]) => array.reduce((accumulator, currentValue) =>
                accumulator.concat(Array.isArray(currentValue) ? flatten(currentValue) : currentValue)
            , []);
        flatten(oops); // [1,2,3,4,5,6]
    }
}