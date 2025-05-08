
//? Some common object methods - 


const obj = {
    name  : "batman",
    age : 23,
    gender : "male"
};


//*  .keys()  -  returns an array of keys of an object.

const arr1 = Object.keys(obj);
console.log(arr1);

//* .value() - returns an array of values of an object.

const arr2 = Object.values(obj);
console.log(arr2);

//* .entries() - return a 2D-array of keys and values of an object.

const arr3 = Object.entries(obj);
console.log(arr3);


//* .assign(target, source)  -  it takes two parameters, target object and multiple source objects.
//* NOTE - always give an empty object( "{}" ) as a target object before source objects.

const obj1 = { a : 1, b : 2 };
const obj2 = { c : 3, d : 4 };
const obj3 = { e : 5, f : 6 };

// const obj4 = Object.assign(obj1, obj2, obj3);

// console.log(obj4);
// console.log(obj1, obj2, obj3);
//? here values of obj1,obj2,obj3 are assigned to obj4 but obj1 is also changed,
//? because the first parameter passed is target object in which we want to assign values.


// so, we pass an empty object ( "{}" )  as a target parameter so that original objects does not changed.

const obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4);
console.log(obj1, obj2, obj3);
// there will be no changes in values of obj1, obj2 and obj3.


//^ Advantage -it creates a copy of object and when we change value from obj4 value of obj1 is not changed.

obj4.a = 99;
console.log(obj4.a);
console.log(obj1.a);




//* spread operator(...) - it spreads the objects and combine them into single object.

const obj5 = {...obj1,...obj2,...obj3};
console.log(obj5);






//* Object.freeze(obj) - This method completely freezes an object.
// You cannot add new properties.
// You cannot remove existing properties.
// You cannot change the values of existing properties.

const obj6 = { x:11, y:22, z:33};
Object.freeze(obj6);

obj6.x = 999;
console.log(obj6);

delete obj6.x;
// no changes because the object is freezed.




//* Object.seal(obj) - This method seals an object.
// You cannot add new properties.
// You cannot remove properties.
// But you can still modify the values of existing properties if they are writable.


const obj7 = { p : 10, q : 20, r : 30};
Object.seal(obj7);

obj7.s = 40;
delete obj7.p;

obj7.q = 99;

console.log(obj7);
// cant add or delete, but can modify existing values.







