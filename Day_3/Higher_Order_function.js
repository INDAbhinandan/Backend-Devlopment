/** Create the higher order function */
function Opration(AddFun,a,b){

    return AddFun(a,b)
}

/** A first order(simple function) define*/
function AddFun(a,b){
    return console.log(a+b)
}

/** Calling HOF */
Opration(AddFun,5,6)

/**
 * return a anonymous function
 */
function Greet(){
    return function (){
        console.log("Hello Abhinandan")
    }
}

let abhi=Greet()
console.log(typeof abhi)
abhi()