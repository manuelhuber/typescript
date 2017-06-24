/**
 * Abstract classes with abstract and implemented method
 */
class Lecture {
    // class properties can be declared in the constructor parameters by adding a access level like "public"
    constructor(room) {
        this.room = room;
    }
    printLocation() {
        console.log("Room " + this.room);
    }
}
/**
 * Extending an abstract class, implementing abstract methods, adding a new method
 */
class AfpLecture extends Lecture {
    constructor() {
        super('A 0.04');
    }
    printInfo() {
        console.log('Learn all the things you will ever need in your life in this lecture!');
    }
    /**
     * this is not required by the abstract class
     */
    printHomework() {
        console.log('Coursera Functional Programming Principles in Scala For Enterprise');
    }
}
class LectureShowcase {
    showAfpLecture() {
        // let lecture : Lecture = new Lecture(); <- Not possible since it's abstract
        let lecture = new AfpLecture();
        lecture.printInfo(); // 'Learn all the things you will ever need in your life in this lecture!'
        lecture.printLocation(); // 'Room A 0.04'
        // lecture.printHomework(); <- Not possible since it's not a member of Lecture
        lecture.printHomework(); // Possible when casting to AfpLecture
    }
}
