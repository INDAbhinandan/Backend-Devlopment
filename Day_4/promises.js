/** 
 * promise from Simran
  */

/** here we create a promise Object
 * with call back fun resolve and reject
 * resolve->posotive type of function
 * reject=>Negative type of function
 */
// const simranPromise = new Promise((resolve, reject) => {
//     let parentDecision = true;
//     if (parentDecision) {
//         resolve("Yahoo.! Ab shaadi ki tayaari karo", parentDecision);
//     } else {
//         reject("Papa ne IAS dhoond liya hai !, sorry..", parentDecision);
//     }
// });
/** now define output of promise objecct 
 * then()=>in this we  call the positive callback fn
 * catch()=>in this we call the negative callback fn
*/
// simranPromise
//     .then((msg,parentDecision) => {
//         console.log("Simran message: " + msg);
//         console.log("Parent Decision was",parentDecision);
//         console.log("Let's book the venue for the wedding...");
//     })
//     .catch((msg,pd) => {
//         console.log("Simran message: " + msg);
//         console.log("Parent Decision was",parentDecision);
//         console.log("Tinder par chale jao");
//     });

    // const simranPromise = new Promise((resolve, reject) => {
    //     let parentDecision = true;
    //     if (parentDecision) {
    //         resolve({message:"Yahoo.! Ab shaadi ki tayaari karo", parentDecision});
    //     } else {
    //         reject({message:"Papa ne IAS dhoond liya hai !, sorry..", parentDecision});
    //     }
    // });

    // simranPromise
    // .then(({message,parentDecision}) => {
    //     console.log("Simran message: " + message);
    //     console.log("Parent Decision was",parentDecision);
    //     console.log("Let's book the venue for the wedding...");
    // })
    // .catch(({message,parentDecision}) => {
    //     console.log("Simran message: " + message);
    //     console.log("Parent Decision was",parentDecision);
    //     console.log("Tinder par chale jao");
    // })
    // .finally(()=>{
    //     console.log("chalo life me clearity mili");
    // });

/** let take a example of 3friend going to goa */
/** we take the three promises and  use in the output code 
 * if the condition is=> all three promises are resolve then we use the all method and in this pass the array of all 3 promises
*/
const f1promise=new Promise((resolve, reject) => {
    
    setTimeout(()=>{
     if (Math.random()>0.5) {
        resolve("friend 1: yes i will go")
     }else{
        reject("friend 1: sorry.. mere pet me derd h")
     }
    },2000)
})

const f2promise=new Promise((resolve, reject) => {
    
    setTimeout(()=>{
     if (Math.random()>0.5) {
        resolve("friend 2: yes i will go")
     }else{
        reject("friend 2: sorry.. meri billi bimar h")
     }
    },2000)
})

const f3promise=new Promise((resolve, reject) => {
    
    setTimeout(()=>{
     if (Math.random()>0.5) {
        resolve("friend 3: yes i will go")
     }else{
        reject("friend 3: sorry.. college jana h")
     }
    },3000)
})

Promise.all([f1promise,f2promise,f3promise]).then((msg)=>{
    console.log(msg);
    console.log("yeh  ! we are going to goa");
}).catch((msg)=>{
    console.log(msg);
    console.log("yaar band kro goa plan");
})

/** now we use the any() -> in this if any promise is resolve then it will proceed 
 * take example of a user varification with three promises[Adhar,API,Database]
*/
const AdharPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if (Math.random()>0.5) {
            resolve("Adhar 1: yes user is varified")
        }else{
            reject("Adhar 1: Not Acces")
        }
    },2000)
})

const APIPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if (Math.random()>0.5) {
            resolve("API :yes user is varified")
        }else{
            reject("API :Not Acces")
        }
    },2000)
})

const DBPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if (Math.random()>0.5) {
            resolve("DB :yes user is varified")
        }else{
            reject("DB :Not Acces")
        }
    },2000)
})

Promise.any([AdharPromise,APIPromise,DBPromise]).then((msg)=>{
    console.log(msg)
}).catch((msg)=>{
    console.log(msg)
    console.log("you are not valid user")
})