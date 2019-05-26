class Course {
    private _id:number;
    private _name:string;
    private _credit:number;

    constructor(id:number, name:string, credit:number) {
        this._id = id;
        this._name = name;
        this._credit = credit;
    }
    getName(): string {
        return this._name;
    }
    getId(): number {
        return this._id;
    }
    getCredit(): number {
        return this._credit;
    }
}

class User {
    private _id:number;
    private _username:string;
    private _courses:Array<Course>;

    constructor(id:number, username:string, courses:Array<Course>) {
        this._id = id;
        this._username = username;
        this._courses = courses;
    }

    getUsername(): string {
        return this._username;
    }
    getId(): number {
        return this._id;
    }
    getCourses(): Array<Course> {
        return this._courses;
    }
}

var course1 = new Course(1, 'Math', 6);
var course2 = new Course(2, 'Algorithms', 4);
var course3 = new Course(3, 'OOP', 3);

var courses:Array<Course> = [course1, course2, course3];
console.log(courses);

var user = new User(1, 'user_x', courses);
console.log(user);

