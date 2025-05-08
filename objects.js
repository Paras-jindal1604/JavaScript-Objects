
//? Objects stores value in key-value pairs. So, we can easily understand what value represents what key.

const obj = {
    fname  : "batman",
    "age" : 23,
    gender : "male",
    acc_bal : 12
};

// there should be no space in name of keys.

console.log(obj);
console.log(typeof obj);

// if these values were stored in array, then its difficult to understand what value is for what field.
let arr = ["batman",23,"male",12];
console.log(arr);


// accessing each value from object - 
console.log(obj.fname);
console.log(obj.age);

//^ The "keys" of object are stored in back-end  as strings.
//^ we can access values by using square brackets also, but keys should be passed in form of string.

console.log(obj["gender"]);
console.log(obj["acc_bal"]);



//^ we can declare key names as strings also and can give space b/w them too.
//^ but there is only one way to access value and that is square brackets because these have space b/w them.

const obj2 = {
    "account balance" : 123,
    "full name" : "batman space",
};

console.log(obj2);
console.log(obj2["full name"]);
console.log(obj2["account balance"]);




//^ we can also define the keys of object as numbers.
//^ we can access values only using square brackets then, keys can be passed as number or string.

const obj3 = {
    0 : 123,
    1 : 345,
    2 : 456
};

console.log(obj3);
console.log(obj3[0]);
console.log(obj3["1"]);
console.log(obj3[2]);
// the keys are always stored as strings in back-end.


// if we print array in console, then it looks same as obj3,
//  because array also store values in index-value pair and it is also implemented using object.
//  thats why array has typeof as object.



//^ creating an object with "undefined" and "null" as key-names  

const obj4 = {
    undefined : "bat",
    null : 333
};

console.log(obj4);
console.log(obj4[undefined]);
console.log(obj4["null"]);





//^ Second method to create Object - using "new" keyword 
// we can add, delete and modify values in object after creating an empty object using "new".

const person = new Object();
// an empty object is created
console.log(person);

// add
person.name = "batman";
person.age = 23;
person.gender = "male";
console.log(person);

// delete
delete person.age;
console.log(person);

// update or modify
person.name = "hit-ro";
person.work = "teacher";
console.log(person);
// if key exists in object then it will be updated, and if key dont exists then it will be created.

//^ NOTE - the object is created using const, but still it got its values updated ?
// because it is created in heap memory with only memory reference in stack memory.





//^ Third method to create object - using Class

class Person{
    constructor(fname,age,gender,city){
        this.fname = fname;
        this.age = age;
        this.gender = gender;
        this.city = city;
    }

}

const per1 = new Person("batman",23,"male","gotham");
const per2 = new Person("supman",23,"male","nyc");

console.log(per1);
console.log(per2);

// constructor creates an object with values passed as parameters in it.
// it allocates memory to object and initialize its values.
// "this" keyword finds the object (which called it) and allocate values to it. 


// Advantage - we can create multiple objects having similar properties by defining class only once.





// ---------------------------------------------------------------------------------------------------

/*

*** In JavaScript, almost "everything" is an object.

Objects are objects
Maths are objects
Functions are objects
Dates are objects
Arrays are objects
Maps are objects
Sets are objects
All JavaScript values, except primitives, are objects.


*** JavaScript Primitives  -  A primitive value is a value that has no properties or methods.

3.14 is a primitive value

A primitive data type is data that has a primitive value.


*** JavaScript defines 7 types of primitive data types:

string
number
boolean
null
undefined
symbol
bigint

Primitive values are immutable (they are hardcoded and cannot be changed).

if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.


*/







// to get all properties of object -  use   objname.__proto__