interface IPerson {
    firstName:string,
    lastName:string,
    sayHi: ()=>string
}

var customer:IPerson = {
    firstName:"Tom",
    lastName:"Hanks",
    sayHi: ():string =>{return "Hi there"}
}
console.log("Customer Object ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())

interface Person {
    personId:number
}

interface Student extends Person{
    schollName:string
}

var student: Student = {
    personId: 2,
    schollName: 'uni'
}

console.log(student);
console.log(student.personId);

