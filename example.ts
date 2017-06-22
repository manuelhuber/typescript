const fibRecursive = (n, a = 1, b = 0) => n === 0 ? b : fibRecursive(n - 1, a + b, a);

const fib = (n : number) => fibRecursive(n, 1, 0);

type Tweet = string;

class Hashtag {
    constructor(public name : string) {
    }

    contains(tweet : Tweet) : boolean {
        return tweet.indexOf("#" + this.name) >= 0;
    }
}

function averageTweetLength(tweets : Tweet[], minLength : number, hashtag? : Hashtag) : number {
    let count : number = 0;
    let total : number = 0;

    tweets.forEach((tweet) => {
        if (tweet.length >= minLength && (!hashtag || hashtag.contains(tweet))) {
            total += tweet.length;
            count++;
        }
    });

    return count === 0 ? 0 : total / count;
}

function teaser() {
    let tens : string[] = [ '10', '10', '10' ];
    console.log(tens.map(parseInt)); // [10, NaN, 2]
}
