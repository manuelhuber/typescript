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
