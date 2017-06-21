class OperationsShowcase {

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
