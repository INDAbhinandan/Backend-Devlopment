/** call back 
 * call back is a function which is passed as an argument to another function
*/

// // main function
// function greet(name,callback){
//     console.log('hello '+name);
//     callback();
// }

// // here create an function for callback functional argument
// function callme(){
//     console.log("hello i am a callback fun")
// }

// // now call the main function 
// greet('Abhinandan',callme)

/** Another Example of callback function */
// main function
// function calculate(a,b,Opration){
//     return Opration(a,b)
// }

// // callback function(opration)--Method(1)
// function addition(a,b){
//     return a+b
// }
// const result=calculate(5,6,addition)
// console.log(result)

// // callback function(opration)--Method(2)
// const subtraction=(a,b)=>{
//     return a-b
// }
// console.log(calculate(5,2,subtraction))

// // callback function(opration)--Method(3)
// const multiplication=calculate(5,4,(a,b)=>{
//     return a*b
// })
// console.log(multiplication)


               /** setTimeout() using callback function */
// function getCheese(callback){
//     setTimeout(()=>{
//         const cheese="🧀";
//         console.log('cheese is packing')
//         callback(cheese)
//     },3000)
// }
// getCheese((cheese)=>{
//     console.log("i got the cheese")
// })

/** using callback and setTimeout prepare a pizza🍕🍕 */
function getCheese(callback){
    setTimeout(()=>{
        const cheese="🧀";
        console.log('here is Cheese '+ cheese)
        callback(cheese)
    },3000)
}

function makeDough(cheese,callback){
    setTimeout(()=>{
        const dough="🍪"
        console.log('here is Dough '+dough)
        callback(dough)
    },3000)
}

function makePizza(dough,callback){
    setTimeout(()=>{
        const pizza="🍕🍕"
        console.log("here is your Pizza "+pizza)
        callback(pizza)
    },3000)
}

getCheese((cheese)=>{
    makeDough(cheese,(dough)=>{
        makePizza(dough,(pizza)=>{                   // when multiple callbacks within a function execute
            console.log('I got my pizza '+ pizza)     // called "callback hell"
        })                                           // shape of resulting code as a piramid so its also
    })                                               // called "pyramid of the doom"
})