/**
 * closure
 * a closer is a function having access to the parent scope,even the parent function has closed
 */

function outerFn(){
  let  outerVar='i am outer variable'
    function innerfn(){
        console.log(outerVar)
    }
    return innerfn
}
let fun=outerFn() // here all the outerfn's local variable will be destroy
fun() // here still able to hold the local variable of outerfn
       //  it is called closer  [fun()]

       /** we use the closer in encapsulation to hide the data 
        * let take an example a owner want to count the custumer when new customer will come
       */

       function newcustomer(){
        let count=0
        return function(){
            count++
            console.log('new customer is ' + count)
        }
       }
       let count=newcustomer();
       count()
       count()
       count()