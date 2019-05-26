
var parsedNumber = new Number(1);
console.log(parsedNumber.toString());
console.log(parsedNumber.valueOf());
parsedNumber = new Number('xx');
console.log(parsedNumber.toString());


function person(id:number, name: string) {
    this.id = id;
    this.name = name;
}

var person1 = new person(1, 'xx');
person.prototype.email = 'yy';
console.log(person1.email);