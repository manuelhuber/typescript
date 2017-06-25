type Tweet = string;
class Hashtag {
  constructor(public name : string) {
  }

  contains(tweet : string) : boolean {
    return tweet.indexOf("#" + this.name) >= 0;
  }
}

function averageTweetLength(tweets : string[], minLength : number, hashtag? : Hashtag) : number {
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
