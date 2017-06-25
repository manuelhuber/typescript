var fibonacci = function (n, a, b) {
    if (a === void 0) { a = 1; }
    if (b === void 0) { b = 0; }
    return n === 0 ? b : fibonacci(n - 1, a + b, a);
};
console.log(fibonacci(10));
function teaser() {
    var tens = ['10', '10', '10'];
    console.log(tens.map(parseInt)); // [10, NaN, 2]
    ['10', '10', '10'].map(parseInt); // [10, NaN, 2]
}
var Circle = (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Object.defineProperty(Circle.prototype, "diameter", {
        get: function () {
            return this.radius * 2;
        },
        enumerable: true,
        configurable: true
    });
    return Circle;
}());
