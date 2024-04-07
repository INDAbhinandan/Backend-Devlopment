/**
 * forEach Method
 * it is a higher order function
 */
const player=['sachin','virat','Dhoni']
// for(let i=0;i<player.length;i++){
//     console.log(player[i])
// }
// using forEach() method
// player.forEach((n)=>{
//     console.log(n)
// })
// const ar=[4,5,7,8]
// let result=1;
// ar.forEach((sum)=>{
//     result*=sum;
// }
// )
// console.log(result)


/** Map 
 * (Creation of a new transformed array)
 * NO change in the original array 
*/
//  arr=[1,2,3,4,5,6]
// cube_arr=arr.map((num=>num**3))
// console.log(cube_arr)
// console.log(arr)


/**  filter */
// let arr=[1,2,3,4,5,6,7,8]
// let even_arr=arr.filter((num=>num%2==0))
// console.log(even_arr)

/** Reduce */
const sum=[2,4,6,8].reduce((curr,next)=>curr+next)
console.log(sum)