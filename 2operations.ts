class OperationsShowcase {

    public increamentDecreament() {
        let count : number = 0;
        ++count;
        count++;
        count--;
        --count;
    }

    public booleanExpressions() {
        // You should check the "truthy" and "falsy" examples first!

        // A boolean expression always returns the last member that needed to be evaluated

        console.log(true && 0 && false); // the expression is only evaluated until the 0 => 0 is be logged
        console.log(false || 'a string' || true); // the expression is only evaluated until the string => 'a string' is be logged
        console.log(false || '' || true); // empty string is falsy, so the entire expression is evaluated => true is logged


        let object : any;
        let a : any = object && object.myProperty;
        console.log(a); // 'undefined'

        object = {
            myProperty: 'my string'
        };
        let b : any = object && object.myProperty;
        console.log(b); // 'my string'

        let boo : boolean = !!(object && object.myProperty);
    }

    /**
     * Short version of if-else
     */
    public ternaryOperator() : void {
        let condition : boolean = false;
        let valueIfTrue : number = 1;
        let valueIfFalse : number = 2;

        // Ternary operator syntax
        let myNumber = condition ? valueIfTrue : valueIfFalse;

        // same as
        let myOtherNumber;
        if (condition) {
            myOtherNumber = valueIfTrue;
        } else {
            myOtherNumber = valueIfFalse;
        }
    }


    public whileLoops() : void {
        let c : number = 10;
        while (c > 0) {
            console.log(c--);
        }
        c = 10;
        do {
            console.log(c--);
        } while (c > 0)

    }

    public forLoops() : void {

        for (let i : number = 10; i > 0; i++) {
            console.log(i);
        }

        let someArray = [ 1, "string", false ];

        for (let entry of someArray) {
            console.log(entry); // 1, "string", false
        }
    }
}
