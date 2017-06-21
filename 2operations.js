var OperationsShowcase = (function () {
    function OperationsShowcase() {
    }
    OperationsShowcase.prototype.increamentDecreament = function () {
        var count = 0;
        ++count;
        count++;
        count--;
        --count;
    };
    OperationsShowcase.prototype.swapVariables = function () {
        var foo = 'bar';
        var bar = 'foo';
        _a = [bar, foo], foo = _a[0], bar = _a[1];
        console.log(foo + bar); // foobar
        var _a;
    };
    OperationsShowcase.prototype.booleanExpressions = function () {
        // You should check the "truthy" and "falsy" examples first!
        // A boolean expression always returns the last member that needed to be evaluated
        console.log(true && 0 && false); // the expression is only evaluated until the 0 => 0 is be logged
        console.log(false || 'a string' || true); // the expression is only evaluated until the string => 'a string' is be logged
        console.log(false || '' || true); // empty string is falsy, so the entire expression is evaluated => true is logged
        var object;
        var a = object && object.myProperty;
        console.log(a); // 'undefined'
        object = {
            myProperty: 'my string'
        };
        var b = object && object.myProperty;
        console.log(b); // 'my string'
        var boo = !!(object && object.myProperty);
    };
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
