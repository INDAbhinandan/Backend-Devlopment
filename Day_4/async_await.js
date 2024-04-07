 async function greet(){
    return 'hello Abhinandan'
}
console.log(typeof greet)
console.log(greet())
greet().then((msg)=>{
    console.log(msg)
})

/** "Radhe Radhe" after a wait */

function greet(){
    console.log("first line");
    setTimeout(() => {
        console.log("Radhe Radhe");
    }, 3000);
    console.log("last line")
}
greet()

/** now i want to wait at setTimeout after that print "last line" 
 * then we should to convert the setTime in the promise
*/
console.log("hello from begning")
async function greet(){
    console.log("first line");
    // create a promise
    let data=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Radhe Radhe");
        }, 3000);
    })
let result=await data // start waiting for the data promise to be completed
console.log(result)
    console.log("last line")
}
greet()
console.log("hello from ending")

/* take another example of if we fetch the data from various server */
console.log("Data are start fetching");
async function fetch(){
     let Adhar=new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data is fetched by adhar")
        }, 3000);
     })
     let result1=await Adhar
     console.log(result1)
     let API=new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data is fetched by API")
        }, 2000);
     })
     let result2=await API
     console.log(result2)
     let server=new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data is fetched by server")
        }, 2000);
     })
     let result3=await server
     console.log(result3)
     
 console.log("all Data are fetched");    
}
fetch()