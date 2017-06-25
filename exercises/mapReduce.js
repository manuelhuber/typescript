"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var ExerciseThree = (function () {
    function ExerciseThree(http) {
        var _this = this;
        this.expected = [['SarahLouli2', 61784],
            ['JadeiteGordon', 21436],
            ['pattyduke_hb', 19538],
            ['Tyler_Wilson45', 1404],
            ['vickilwas', 1000],
            ['EKSpindler', 834],
            ['scorpiess93', 194],
            ['youlivethrice', 82],
            ['aneetacarol', 22]];
        // Map with key = username, value = total retweet count
        this.retweets = {};
        http.get('data/rawTweets.json').map(function (a) { return a.json(); }).subscribe(function (rawTweets) {
            // TODO map the raw tweets to the Tweet class
            /**
             * The needed data is stored in the following properties
             * rawTweets[i].text
             * rawTweets[i].retweet_count
             * rawTweets[i].user.screen_name
             */
            var tweets = rawTweets.map(function (raw) {
                return new Tweet(raw.user.screen_name, raw.retweet_count, raw.text);
            });
            // TODO remove tweets that have less than 10 retweets
            var goodTweets = tweets.filter(function (tweet) { return tweet.retweets > 10; });
            // TODO reduce the array to a map of retweets
            _this.retweets = goodTweets.reduce(function (result, tweet) {
                result[tweet.user] = result[tweet.user] ? result[tweet.user] + tweet.retweets : tweet.retweets;
                return result;
            }, _this.retweets);
        });
    }
    Object.defineProperty(ExerciseThree.prototype, "data", {
        get: function () {
            var _this = this;
            return Object.keys(this.retweets)
                .map(function (key) {
                return [key, _this.retweets[key]];
            }).sort(function (a, b) { return b[1] - a[1]; });
        },
        enumerable: true,
        configurable: true
    });
    ExerciseThree.prototype.correct = function (entry, i) {
        return entry[0] === this.expected[i][0] && entry[1] === this.expected[i][1] ? 'correct' : 'wrong';
    };
    return ExerciseThree;
}());
ExerciseThree = __decorate([
    core_1.Component({
        selector: 'mapReduce',
        template: "<div>\n    <div>Map the raw tweet data to proper tweet objects and count the total retweets per user</div>\n    <table>\n        <tr>\n            <th>User</th>\n            <th>Retweets</th>\n        </tr>\n        <tr *ngFor=\"let entry of data; index as i\">\n            <td>{{entry[0]}}</td>\n            <td>{{entry[1]}}</td>\n            <td>{{correct(entry,i)}}</td>\n        </tr>\n    </table>\n</div>\n  "
    })
], ExerciseThree);
exports.ExerciseThree = ExerciseThree;
var Tweet = (function () {
    function Tweet(user, retweets, message) {
        this.user = user;
        this.retweets = retweets;
        this.message = message;
    }
    return Tweet;
}());
