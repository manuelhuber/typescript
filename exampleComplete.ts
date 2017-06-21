type Predicate = (t : Tweet) => boolean;

function and(predicates : Predicate[]) : Predicate {
    return (e) => predicates.every(p => p(e));
}

function average(nums : number[]) : number {
    const total = nums.reduce((a, b) => a + b, 0);
    return nums.length === 0 ? 0 : total / nums.length;
}

function tweetLengths(tweets : Tweet[], conditions : Predicate[]) : number[] {
    const validTweets : Tweet[] = tweets.filter(and(conditions));
    return validTweets.map(tweet => tweet.length);
}

function averageTweetLengthFu(tweets : Tweet[], conditions : Predicate[]) : number {
    return average(tweetLengths(tweets, conditions));
}

let myTweets : Tweet[] = [];

let myHashtag = new Hashtag('foobar');

averageTweetLength(myTweets, 10, myHashtag);
averageTweetLengthFu(myTweets, [ t => t.length > 10, t => myHashtag.contains(t) ]);
