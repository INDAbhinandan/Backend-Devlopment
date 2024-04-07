// arr=[3,4,5]
// console.log(typeof(arr))
// console.log(arr)

// //  another way of creat an array
// arr1=new Array()
// console.log(arr1)

// // Access the array with the help of indexes
//  console.log(arr[1])

// /**
//  * Arrays are mutable
//  */
// arr[0]=100
// console.log(arr)

/**insert */
// (in the end)
// arr2=[3,5,6,7,2,1,9]
// arr2.push(11);
// console.log(arr2)
// arr2.push(99,12,13)
// console.log(arr2)

// (in the starting)
// arr3=[2,3,45]
// arr3.unshift(11,10)
// console.log(arr3)

/** Delete */
//( in the end)
arr4=[86,23,57,11]
// arr4.pop()
// console.log(arr4)
// (in the starting)
arr4.shift()
// console.log(arr4)

/** concat the array */
// ar1=[2,4]
// ar2=[5,6]
// let newAr=ar1.concat(ar2)
// console.log(newAr)

/**length */
// console.log(ar1.length)

/** convert array to String */
// join()
// char_Array=['a','e','i','o','u'];
// console.log(char_Array.join())
// console.log(char_Array.join(""))
// toString()
// console.log(char_Array.toString())

/**Slicing (did not modify the array)*/
// aa=[3,2,1,4,6,7,8,9,6,5,]
// console.log(aa.slice(2))
// console.log(aa.slice(2,7))
// console.log(aa.slice(5,-1))
// console.log(aa.slice(-7-2))
// console.log(aa.slice(2,-1))

/**Splicing (which modify the array) */
// aa2=[4,2,6,8,9]
// let remove=aa2.splice(2,2)
// console.log(remove)
// console.log(aa2)
// remove and add both
// aa3=[6,5,4,3,2,8,9]
// let remove2=aa3.splice(3,2,99,999,90)
// console.log(remove2)
// console.log(aa3)

/** Reverse the array */
// r=[4,1,6,7]
// r.reverse()
// console.log(r)

/**
 * indexOf
 */
// r=[4,1,6,7]
// console.log(r.indexOf(6))
// console.log(r.indexOf(78))

/**
 * Sorting the array
 */
// let r=[15,40,1,13,2]
// r.sort((a,b)=>a-b);
// r.sort((a,b)=>b-a);
// console.log(r)
