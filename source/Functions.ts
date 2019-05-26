
function logger(message: string) {
    console.log(message);
}
logger('testing...');


function sum(num1:number, num2:number):number {
    return num1 + num2;
}
logger(String(sum(3,4)));

/**
 * optional parameter: age?: number
 * @param id
 * @param name
 * @param age
 */
function display_person_info(id: number, name: string, age?: number) {
    var person_info:string;
    person_info = 'id:' + id;
    person_info += ' name:' + name;
    if (age != undefined) {
        person_info += ' age:' + age;
    }
    console.log(person_info);
}

display_person_info(1, 'johny');
display_person_info(1, 'johny', 20);


/**
 * Rest parameter
 * @param nums
 */
function addNumbers(...nums: number[]):number {
    var index;
    var sum: number = 0;

    for (index =0; index < nums.length; index++) {
        sum += nums[index];
    }

    return sum;
}
console.log(addNumbers(1,2,3,4));

/**
 * Parameter with default value
 * @param amount
 * @param rate
 */
function calculateDiscount(amount: number, rate:number = 50):number {
    return amount * (rate / 100);
}
console.log(calculateDiscount(100));
console.log(calculateDiscount(100, 70));


/**
 * Anonymous functions
 * @param data
 */
var displayer = function (data:string) {
    console.log(data);
}
displayer('displayer test');

var summer = function (a:number, b:number) {
    return a + b;
}
console.log(summer(2,3));

var summer2 = new Function("a", "b", "return a + b");
console.log(summer2(2,3));

/**
 * Lambda expression
 * @param x
 * @param y
 */
var multiplier = (x:number, y:number) => {return x * y;}
console.log(multiplier(2,6));

var finish = () => {
    console.log('finished');
}
finish();