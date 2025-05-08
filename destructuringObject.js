
//? Destructuring is the way to take out values from an object.

const dest = {
    name : "batman",
    age : 23,
    city : "gotham",
    balance : 99
};

const {name, age, balance} = dest;
console.log(name, age, balance);
// we can directly get any values from an object, this is called destructuring.


// we can also change the name of variable, after changing name we cant use old name of variable(error).

const dest1 = {
    age : 23,
    city : "gotham"
};

let {age : a, city : b} = dest1;
console.log(a,b);


//^ rest operator -  certain not destructed values take rest in new object using spread operator at last.

const dest3 = {
    f : 1, 
    g : 2,
    h : 3,
    i : 4, 
    j : 5
};

const {f, h, j, ...temp} = dest3;

console.log(f,h,j);
console.log(temp);
// the values that are not destructured will take rest in temp object.





//^ NOTE - we can also perform same destructuring on array.

const arr1 = [11,22,33,44,55];
const [first,second] = arr1;
console.log(first,second);

// if we dont want an element in between then we can give empty space in destructuring

const arr2 = [66,88,99,12,34];
const [w, ,x,y, ,z] = arr2;
console.log(w,x,y,z);


// if we dont want some values then we can use spread operator in last to make them rest.

const arr3 = [4,5,6,8,9,0,1];

const [p,q,r,...leftover] = arr3;
console.log(p,q,r,leftover);




//^ How to destructure a nested object ?
// its like nested destructing.

const user = {
    name : "batman", 
    age : 23, 
    arra : [11,22,33],
    address : {
        city : "gotham",
        pincode : 100001,
        state : "emergency"
    }
};

const {address: {city,pincode}} = user;
const {arra : [first_val]} =  user;

console.log(city, pincode);
console.log(first_val);


// the first curly braces are for user object and destructured the value address from it.
// now address value itself is object, second curly braces destructured values from address.
// always remember to add colon for nested destructuring.
// we cant use address.pincode here as it will throw error.

// similarly we can use array destructuring inside object.











