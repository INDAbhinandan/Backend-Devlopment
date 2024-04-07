/** Asynchronous 
 * it refer to the execution of the code in non blocking manner
 * int his we use setTimeout() method
*/

console.log('hello from the first')

setTimeout(()=>{
    console.log('hello from call back fn')
},4000)   // it will delay with 4sec

console.log('hello from the last')
 