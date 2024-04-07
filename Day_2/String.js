let name="Abhinandan"
let sirName='Singh'
/**
 * Access the charecter based on index
 */
console.log(name[0])
console.log(name[15])
// through charAt()
console.log(name.charAt(2))

/**
 * length of string
 */
console.log(name.length)

/**
 * Concate the string
 */
console.log(name +sirName)
console.log(name.concat(sirName))

/**
 * convert the upper and lower case
 */
console.log(name.toUpperCase())
console.log(name.toLowerCase())

/*
Slicing
*/
console.log(name.slice(2))
console.log(name.slice(2,5))   // it will go 2 to (5-1)
console.log(name.slice(-5)) 
console.log(name.slice(-5,-1))

/*
indexOf
*/
console.log(name.indexOf('A'))
console.log(name.indexOf('z'))


/**
 * trim
 * delete the extra spaces
 */
let n="  ram "
console.log(n.trim())

/**
 * split
 * convert the string to the array
 */
let names="abhi ankita niraj mukesh"
console.log(names.split(" "))