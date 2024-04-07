var Obj1={
    Name:"Abhinandan Singh",
    Age:21,
Addition:function(a,b){
    c=a+b;
    // console.log(c);
}
}
// console.log(Obj1.Addition(6,7));
let a;
let b;
function Subtraction(a,b){
    let c=a-b;
    // console.log(c);
}
// console.log(Subtraction(5,2))
// console.log(5==='5');
// console.log(10 & 6)
//                         Switch cases
// let name='Abhinandan'
// switch(name){
//     case 'Sangam':
//         console.log("he is Sangam")
//         break

//         case 'Abhinandan':
//             console.log("he is Abhinandan")
//             break
        
//     default:
//         console.log("Unknown")
//         }

        //                       Loop
        // for(i=0;i<=10;i++){
        //     console.log("Abhinandan")
        // }
// use of continue and beak keyword in the loop
        // for(let i=1;i<=50;i++){
        //     if(i%2!=0){
        //         continue;
        //     }
        //     console.log(i)
        // }
        
        for(let i=1;i<=10;i++){
            if(i==7){
                break;
            }
            console.log("hey " + i + " lets date")
        }