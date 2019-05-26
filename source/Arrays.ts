

var nums:number[];
nums = [1,2,3,4,5,6];
console.log(nums);

nums = new Array(10);
console.log(nums);

var num_arr1:number[] = [1,2,3];
var num_arr2:number[] = [9,8,7];
var num_arr3:number[] = num_arr1.concat(num_arr2);
console.log(num_arr3);

var num_arr4 = num_arr3.filter((num) => num > 5);
console.log(num_arr4);

num_arr4.forEach((num) => console.log(num));

var num_arr5 = num_arr4.map((num) => num * 2);
console.log(num_arr5);
console.log(num_arr5.reverse());
console.log(num_arr5);

var arr:number[] = [10,20];
var[x,y] = arr;
console.log(x);
console.log(y);




