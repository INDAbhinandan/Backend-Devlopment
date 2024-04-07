/** syntax related */
// console.log("hello";

/** Runtime exception */
// let x=5;
// console.log(x.toUpperCase());

/** logical */
// let num=5;
// let result=num/0;  // logical error is devided by zero
// console.log(result)

/**        HANDLE              */
// let obj=undefined
// console.log(obj.name);
//TypeError: Cannot read properties of undefined (reading 'name')

try{
  let obj=undefined
  console.log(obj.name);
  }catch(error){  //error->define the what is error is occure
    console.log("exception handled")
    console.log(error)
  }

/** if code is right then it will not perform catch portion 
 * finally ->it will always execute [just like we use in promise]
*/
try{
    let obj={
        name:"Abhinandan"
    }
    console.log(obj.name);
   }catch{
      console.log("exception handled")
   }finally{
    console.log("i will always execute");
   }