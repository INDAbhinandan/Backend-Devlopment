// /**
//  *Global Scope
//  in the global scope when we initialize it can access every where in block or function any where
//  */
//  name="Abhinandan Singh"
// console.log(name)
// function fun(){
//     console.log(name)
// }
// fun()

// /**
//  * function scope
//  * all three let,const and var are function scope
//  * only in the function variable are accesable out side of function cant be access
//  */
// function func(){
//    var num=15;
//     console.log(num)
// }
// func()
// console.log(num)

/**
 * block scope
 * let and const both are block scope
 */
// {
//     let a=6;
// }
// console.log(a)


/**
 * Hoisting
 * access the variable before it initialization
 * only var is hoisted
 */
console.log(a)
var a=8;