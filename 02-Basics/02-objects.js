// singleton => when we declare with literals it wont be singleton, when we declare with contructor it became singleton
// object literals

let myObj = {}// this is not singleton
let myObj2 = new Object(); // this is singleton

const mySym = Symbol("key1");

const myUser  = {
    name:"Abhi",
    job:"FrontEnd-Dev",
    location:"karnataka",
    email:"ak@gmail.com",
    [mySym]:"myKey1",
    isLoggedIn:false,
    "last LoginDays":["monday","saturday"]
}

// Object.freeze(myUser);// if we want to freez the object no changes should be happened in future code
// console.log(myUser.email);
// console.log(myUser["isLoggedIn"]);
// console.log(myUser["last LoginDays"]);// it wont suggest it is taking automatically here
// console.log(typeof myUser.mySym); // it gives string not symbol to get symbol we should use [mySym] in object insted mySym
// console.log(myUser);
/*{
    name: 'Abhi',
    job: 'FrontEnd-Dev',
    location: 'karnataka',
    email: 'ak@gmail.com',
    isLoggedIn: false,
    'last LoginDays': [ 'monday', 'saturday' ],
    [Symbol(key1)]: 'key1'
  }*/
  myUser.greeting = function () {
    return "hello lerners"
  }
  myUser.greetingTwo = function () {
    return `hello user, ${this.name}`
    
  }

//   console.log(myUser.greeting());
  // when we dont give () we get anonymous function , we get function referance like **myuser.greeting** without paranthesis 
//   console.log(myUser.greetingTwo());
let mynObj = {
    name:"abhi",
    email:"ak@gmail.com",
};
let mynObj2 = {
    lastName:"k",
    city:"Bidar"
}

let obj = Object.assign({},mynObj,mynObj2);
// console.log(obj);
// we can do concatination using spred also 
let obj3 = {...mynObj,...mynObj2};
// console.log(obj3);


/*  object destructuring */
const course = {
    courseName :"JavaScript",
    price:"free",
    language:"any"
}
const {courseName} = course;// insted of writing course.courseName we can destructure it.
// console.log(courseName); // javascript
// if the name is too difficult to pronounce 
const {courseName:subject} = course;
// console.log(subject); // javascript
 

