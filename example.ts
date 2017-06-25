const fibonacci = (n : number, a = 1, b = 0) => n === 0 ? b : fibonacci(n - 1, a + b, a);

console.log(fibonacci(10));

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

function teaser() {
  let tens : string[] = [ '10', '10', '10' ];
  console.log(tens.map(parseInt)); // [10, NaN, 2]
}


class Circle {

  public radius : number;

  public get diameter() : number {
    return this.radius * 2;
  }

  constructor(radius : number) {
    this.radius = radius;
  }

}



