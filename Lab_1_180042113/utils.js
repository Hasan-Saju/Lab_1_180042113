const HelloFunc=require('./helloWorld');

// import menas that whole file execute once
HelloFunc.Hello();
console.log(HelloFunc.name);

console.log("setInterval and Timeout");

// setInterval

// first parameter callback function, 2nd one time
// 1000ms por ager function ta call hocche
setInterval(()=>{
    HelloFunc.Hello();
},1000);

// setTimeout
// fixed time er por parameter function ta just ekbar call hobe
setTimeout(()=>{
    console.log(HelloFunc.name);
},5000);



//3 types of module
/*
local module  -> local utils.js,helloWorld.js
global module  -> fs, __filename
3rd party module/package  -> special purpose, nvm install
*/ 