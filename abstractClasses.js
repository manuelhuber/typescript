var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lecture = (function () {
    // class properties can be declared in the constructor parameters by adding a access level like "public"
    function Lecture(room) {
        this.room = room;
    }
    Lecture.prototype.printLocation = function () {
        console.log("Room " + this.room);
    };
    return Lecture;
}());
var AfpLecture = (function (_super) {
    __extends(AfpLecture, _super);
    function AfpLecture() {
        return _super.call(this, 'A 0.04') || this;
    }
    AfpLecture.prototype.printInfo = function () {
        console.log('Learn all the things you will ever need in your life in this lecture!');
    };
    AfpLecture.prototype.printHomework = function () {
        console.log('Coursera Functional Programming Principles in Scala For Enterprise');
    };
    return AfpLecture;
}(Lecture));
var LectureShowcase = (function () {
    function LectureShowcase() {
        // let lecture : Lecture = new Lecture(); <- Not possible since it's abstract
        var lecture = new AfpLecture();
        lecture.printInfo();
        lecture.printLocation();
        // lecture.printHomework(); <- Not possible since it's not a member of Lecture
        lecture.printHomework(); // Possible when casting to AfpLecture
    }
    return LectureShowcase;
}());
