
//? Nested object - an object inside another object.
// here, one of the keys of object is an object itself.

const nested = {
    fname : "batman",
    age : 23,
    gender : "male",
    address : {
        pincode : 100001,
        city : "gotham"
    }
};

console.log(nested);
console.log(nested.address);
console.log(nested.address.pincode);



//^ What happens when we create a copy using  spread operator(...)  and  assign() method.

const nest1 = {
    a: 1, 
    b: 2, 
    c: {
        d:3,
        e:4
    }
};

const nest2 = Object.assign({},nest1);

nest2.a = 99;
nest2.c.d = 88;

console.log(nest1);
console.log(nest2);


//^when we create a copy using spread operator(...)  and  assign() method then - 
// a deep copy of values of object is created, but a shallow copy of nested values is created.
// it means direct keys wont change but nested keys of original object are changed.
// the nested keys are same for both objects.



//^ so, the best practice is to create a copy using structuredClone() so that original values remain unchanged.



//^ we can also create a function inside object.
// to access function inside object use key name as function call with parenthesis.

const fun = {
    name : "batman",
    age : 23,
    greet : function(){
        console.log("hello");
    },
    money : function(){
        return 20;
    }
};

fun.greet();
console.log(fun.greet());
// here function greet is called so it prints "hello" and it returns "undefine" to be printed to console.log
console.log(fun.money());





