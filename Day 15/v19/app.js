// // v2 
// // console.log()
// // this is Comment
// console.log("namaste duniya");
// let num=101;
// console.log(num);

// // v3
// // template literals
// let pencilPrice=3;
// let eraserPrice=4;
// let total="total is="+ (pencilPrice + eraserPrice)+ "rupees";
// let t=`total is= ${pencilPrice+eraserPrice}rupees`;//template literals
// console.log("USING CONTCATENATION", total);
// console.log("USING TEMPLATE LITERALS", t);

// // v4
// // operator in js
// let a=1;
// let b=a;//assignment operatior
// //arithmetic operator
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// console.log(a++);
// console.log(++a);
// console.log(b++);
// console.log(++b);

// //v5
// //comparison operator
// let age=19
// console.log(age>18);
// console.log(age>=18);
// console.log(age<18);
// console.log(age<=18);
// console.log(age==18);
// console.log(age!=18);

// //v6
// //comparision for non number
// console.log('a'<'b');
// console.log('b'<'c');
// console.log('a'>'A');
// console.log('A'<'B');
// console.log('B'<'C');

// //v7
// //nothing for code

// //v8
// //if statement
// let z=18;
// if(z>=18)
// {
//     console.log(`you can vote`);
//     console.log(`your age is ${z}`);
// }

// //v9
// //prac ques
// let signal="green";
// if(signal=="green")
// {
//     console.log(`Traffic signal: ${signal}-GO`);
// }

// if(signal=="orange")
// {
//     console.log(`Traffic signal: ${signal}-READY`);
// }

// if(signal=="red")
// {
//     console.log(`Traffic signal: ${signal}-STOP`);
// }

// //v10
// //else if statement

// let o=2;

// if(o==0)
// {
//     console.log(`inside of if statement ${o}`);
// }
// else if(o==2)
//     {
//         console.log(`inside of else if statement ${o}`);
//     }

// v11
// else statement

// let o=12;

// if(o==0)
// {
//     console.log(`inside of if statement ${o}`);
// }
// else if(o==2)
//     {
//         console.log(`inside of else if statement ${o}`);
//     }

// else console.log("Tumse na ho paiga");

// // v12
// // prac ques

// let popprice="XL";

// if(popprice=='S')
// {
//     console.log("price is 50");
// }
// else if(popprice=='M')
//     {
//     console.log("price is 100");
//     }
//     else if(popprice=='L')
//         {
//         console.log("price is 200");
//         }
//         else
//             console.log("price is 250");  

// // v13
// // nested if-else statment

// let g='e';
// let h='3';
// if(g=='e')
// {
//     if(h=='3')
//     {
//         console.log(`nested if else statement = ${h}`);
//     }
//     else
//         console.log("tum se ho jaiga");
// }
// else
//     console.log("sachme ho");

// //v14
// //logical operators
// let videoprogress=50;
// let assigsub='y';

// if((videoprogress>75) && (assigsub=='y'))
// {
//     console.log("you can now download your course certificate");
// }
// else
//     console.log("please finish course so you can earn certificate");

// //v15
// //pra ques
// let str="abhishek";

// if(str[0]=='a'&& str.length>3)
// {
//     console.log(`${str} is a good string`);
// }
// else
//     console.log(`${str} is a NOT good string`);
    
//v16
//truthy and falsy value
// falsy value:  false, 0, -0, On(BigInt value), ""(empty string), null, undefined, NaN
if(NaN)
{
    console.log(true);
}
else
    console.log(false);

//v17
//switch statement

let signal= "green";

switch(signal)
{
    case "green":
        console.log("GO");
        break;
    case "orange":
        console.log("READY");
        break;
    case "red":
        console.log("STOP");
        break;
    default:
        console.log(`${signal}`);
}

//v18
//pra ques
let day=18;

switch(day)
{
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
    default:
        console.log(`${day} day does not exist`);    
}

//v19
//alerts and prompts
alert("watchman: yeee kaha chale aa rahe ho yaha bade saabh ane wale hai");
console.log("this is console.log");
console.error("this is console.error");
console.warn("this is console.warn");
alert(`unknown pata hai kisse baat kar rahe ho`)
let fname=prompt("(terrified watchman):apka phela name:");
let lname=prompt("(terrified watchman):apka last name:");
alert(`salam ${fname+" "+lname} shabb`);