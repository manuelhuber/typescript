abstract class Lecture {
    // class properties can be declared in the constructor parameters by adding a access level like "public"
    constructor(public room : string) {
    }

    printLocation() : void {
        console.log("Room " + this.room);
    }

    public abstract printInfo() : void;
}

class AfpLecture extends Lecture {

    constructor() {
        super('A 0.04')
    }

    public printInfo() : void {
        console.log('Learn all the things you will ever need in your life in this lecture!');
    }

    public printHomework() : void {
        console.log('Coursera Functional Programming Principles in Scala For Enterprise');
    }
}

class LectureShowcase {
    constructor() {
        // let lecture : Lecture = new Lecture(); <- Not possible since it's abstract
        let lecture : Lecture = new AfpLecture();
        lecture.printInfo();
        lecture.printLocation();
        // lecture.printHomework(); <- Not possible since it's not a member of Lecture
        (<AfpLecture>lecture).printHomework(); // Possible when casting to AfpLecture
    }
}
