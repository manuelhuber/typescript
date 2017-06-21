function and(predicates) {
    return function (e) { return predicates.every(function (p) { return p(e); }); };
}
function average(nums) {
    var total = nums.reduce(function (a, b) { return a + b; }, 0);
    return nums.length === 0 ? 0 : total / nums.length;
}
function tweetLengths(tweets, conditions) {
    var validTweets = tweets.filter(and(conditions));
    return validTweets.map(function (tweet) { return tweet.length; });
}
function averageTweetLengthFu(tweets, conditions) {
    return average(tweetLengths(tweets, conditions));
}
var myTweets = [];
var myHashtag = new Hashtag('foobar');
averageTweetLength(myTweets, 10, myHashtag);
averageTweetLengthFu(myTweets, [function (t) { return t.length > 10; }, function (t) { return myHashtag.contains(t); }]);
