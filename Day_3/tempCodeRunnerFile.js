function greet(name,callback){
    console.log('hello '+name);
    callback();
}

// here create an function for callback functional argument
function callme(){
    console.log("hello i am a callback fun")
}

// now call the main function 
greet('Abhinandan',callme)
