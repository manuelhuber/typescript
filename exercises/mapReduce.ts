import { Component, NgModule, VERSION } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'mapReduce',
  template: `<div>
    <div>Map the raw tweet data to proper tweet objects and count the total retweets per user</div>
    <table>
        <tr>
            <th>User</th>
            <th>Retweets</th>
        </tr>
        <tr *ngFor="let entry of data; index as i">
            <td>{{entry[0]}}</td>
            <td>{{entry[1]}}</td>
            <td>{{correct(entry,i)}}</td>
        </tr>
    </table>
</div>
  `
})
export class ExerciseThree {
  expected : [ string, number ][] = [ [ 'SarahLouli2', 61784 ],
    [ 'JadeiteGordon', 21436 ],
    [ 'pattyduke_hb', 19538 ],
    [ 'Tyler_Wilson45', 1404 ],
    [ 'vickilwas', 1000 ],
    [ 'EKSpindler', 834 ],
    [ 'scorpiess93', 194 ],
    [ 'youlivethrice', 82 ],
    [ 'aneetacarol', 22 ] ];

  get data() : [ string, number ][] {
    return Object.keys(this.retweets)
      .map((key : string) : [ string, number ] => {
        return [ key, this.retweets[ key ] ]
      }).sort((a, b) => b[ 1 ] - a[ 1 ]);
  }

  // Map with key = username, value = total retweet count
  retweets : { [username : string] : number } = {};

  constructor(http : Http) {
    http.get('data/rawTweets.json').map(a => a.json()).subscribe((rawTweets : any[]) => {

      // TODO map the raw tweets to the Tweet class
      /**
       * The needed data is stored in the following properties
       * rawTweets[i].text
       * rawTweets[i].retweet_count
       * rawTweets[i].user.screen_name
       */
      let tweets : Tweet[] = rawTweets.map((raw : any) => {
        return new Tweet(raw.user.screen_name, raw.retweet_count, raw.text)
      });

      // TODO remove tweets that have less than 10 retweets
      let goodTweets : Tweet[] = tweets.filter(tweet => tweet.retweets > 10);

      // TODO reduce the array to a map of retweets
      this.retweets = goodTweets.reduce((result, tweet) => {
        result[ tweet.user ] = result[ tweet.user ] ? result[ tweet.user ] + tweet.retweets : tweet.retweets;
        return result;
      }, this.retweets)

    });
  }

  public correct(entry : [ string, number ], i : number) : string {
    return entry[ 0 ] === this.expected[ i ][ 0 ] && entry[ 1 ] === this.expected[ i ][ 1 ] ? 'correct' : 'wrong';
  }
}

class Tweet {
  constructor(public user : string,
              public retweets : number,
              public message : string) {
  }
}
