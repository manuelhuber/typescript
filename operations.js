var OperationsShowcase = (function () {
    function OperationsShowcase() {
    }
    /**
     * Short version of if-else
     */
    OperationsShowcase.prototype.ternaryOperator = function () {
        var condition = false;
        var valueIfTrue = 1;
        var valueIfFalse = 2;
        // Ternary operator syntax
        var myNumber = condition ? valueIfTrue : valueIfFalse;
        // same as
        var myOtherNumber;
        if (condition) {
            myOtherNumber = valueIfTrue;
        }
        else {
            myOtherNumber = valueIfFalse;
        }
    };
    OperationsShowcase.prototype.whileLoops = function () {
        var c = 10;
        while (c > 0) {
            console.log(c--);
        }
        c = 10;
        do {
            console.log(c--);
        } while (c > 0);
    };
    OperationsShowcase.prototype.forLoops = function () {
        for (var i = 10; i > 0; i++) {
            console.log(i);
        }
        var someArray = [1, "string", false];
        for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
            var entry = someArray_1[_i];
            console.log(entry); // 1, "string", false
        }
    };
    return OperationsShowcase;
}());
