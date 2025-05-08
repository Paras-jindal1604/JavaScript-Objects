
const user1 = {
    a:1,
    b:2
};

const user2 = {
    c:3,
    d:4
};

// user2 can not access properties and values of user1.

user2.__proto__ = user1;

console.log(user2.a);
console.log(user2.b);

//^ here, user2 will inherit values from user1 because user2 has is following prototype of user1 using __proto__




const array = [100,200,300];

console.log(array.__proto__  == Array.prototype);

console.log(Array.prototype.__proto__ == Object.prototype);

console.log(Object.prototype.__proto__ == null);

console.log(array.__proto__.__proto__ == Object.prototype);
console.log(array.__proto__.__proto__.__proto__ == null);


// This is called "prototype chainging."








