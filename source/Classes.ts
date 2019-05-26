
class Person {
}

class Car {
    engine:string;

    constructor(engine:string) {
        this.engine = engine;
    }

    disp(): void {
        console.log('engine:' + this.engine);
    }
}

var car1 = new Car('petrol');
car1.disp();
console.log(car1);


class Shape {
    area: number;

    constructor(area: number) {
        this.area = area;
    }
}

class Circle extends Shape{
    static id: number = 5;
   disp() {
       console.log('area of circle ' + this.area);
   }
}

var circle = new Circle(2);
circle.disp();
console.log(Circle.id);


class Encapsulate {
    str:string = "hello";
    private str2:string = "world";

    getStr2(): string {
        return this.str2;
    }
}
var obj = new Encapsulate();
console.log(obj.str);
console.log(obj.getStr2());

interface ICourse {
    id:string,
    name:string
}

class Course {
    id:string;
    name:string
    constructor(id:string, name:string) {
        this.id = id;
        this.name = name;
    }
}

var course1: ICourse = {id:'5', name:'Math'};
console.log(course1);
console.log(typeof (course1));

var course2 = new Course('6', 'Algorithms');
console.log(course2);
console.log(typeof (course2));

course2 = course1;
console.log(course2);
console.log(typeof (course2));



