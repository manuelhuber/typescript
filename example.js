var fibRecursive = function (n, a, b) {
    if (a === void 0) { a = 1; }
    if (b === void 0) { b = 0; }
    return n === 0 ? b : fibRecursive(n - 1, a + b, a);
};
var fib = function (n) { return fibRecursive(n, 1, 0); };
var Hashtag = (function () {
    function Hashtag(name) {
        this.name = name;
    }
    Hashtag.prototype.contains = function (tweet) {
        return tweet.indexOf("#" + this.name) >= 0;
    };
    return Hashtag;
}());
function averageTweetLength(tweets, minLength, hashtag) {
    var count = 0;
    var total = 0;
    tweets.forEach(function (tweet) {
        if (tweet.length >= minLength && (!hashtag || hashtag.contains(tweet))) {
            total += tweet.length;
            count++;
        }
    });
    return count === 0 ? 0 : total / count;
}
function teaser() {
    var tens = ['10', '10', '10'];
    console.log(tens.map(parseInt)); // [10, NaN, 2]
}
