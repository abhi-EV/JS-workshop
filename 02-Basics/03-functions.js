// function defination

const myFunc = function(){
    console.log("hello");
}
//how to call function
// myFunc();
function addTwoNum(n1,n2) {
    let res = n1+n2;
   return res;
}
const res = addTwoNum(5,6);
// console.log("Result:" , res);

let myArrFunct = ()=>{
    console.log("test");
}
// myArrFunct();//

//implicit return there are no new line statements
// const addTwo = ()=> 1+2;
// if we want to object to be returned we need to cover it in parenthesis
let obj = {
    username:"abhi",
    email:"abhi1234@gmail.com"
}
const addTwo = ()=> ({username:"abhi"});

console.log(addTwo());