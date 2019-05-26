/**
 * Typescript data types
 * Any: super type of all data types
 * Built-in types: number, string, boolean, void, null, undefined
 * User-defined types: Arrays, Enums, Classes, Interfaces
 */

var country:string = 'Turkey';
console.log(country);

var generic_var: any = 1;
console.log(generic_var);
generic_var = 'test';
console.log(generic_var);

var age = 25
console.log(typeof(age));

var counter: number = 4
for(var index = 0; index < counter; index++) {
    console.log(index);
}


