
//? shallow copy -  only copy of reference is made. 
// if a value is changed in another object, it will be reflected in original object.

const obj1 = { a:1, b:2};
const obj2 = obj1;

obj2.a = 99;
console.log(obj1, obj2);
// value changed in obj2 is  also reflected in obj1.


//? deep copy  - using structuredClone()  copy of values of object is made.
// if a value is changed it will not be reflected in original as both have different memory address.

const obj3 = structuredClone(obj1);

obj3.a = 55;
console.log(obj3, obj1);
// the value changed through obj3 is not changed in obj1.




