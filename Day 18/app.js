// //v1
// //object literals info


// //v2
// //object literals declaration and initialization
// let student={
//     name: "abhishek",
//     age: 19,
//     marks: 10000
// };
// console.log(student);

// const item={
//     price: 232,
//     discount: 32,
//     colors: ["red", "blue"]
// };
// console.log(item);

// //v3
// //object literals declaration and initialization continue
// const post={
//     username: "abhishek",
//     content: "first js post",
//     likes: 1000000,
//     repost: 1000000,
//     tags: ["@tag1", "@tag2"]
// };
// console.log(post);

// //v4
// //object literals access
// const newpost={
//     username: "abhishek",
//     content: "first js post",
//     likes: 1000000,
//     repost: 1000000,
//     tags: ["@tag1", "@tag2"]
// }

// let property="likes";//method1 is helful when user is interacting
// console.log(newpost[property]);

// console.log(newpost.likes);//method2

// //V5
// //FACTS about object literals
// let obj={
//     1:'a',
//     null: 'b',
//     undefined: 'c',
//     true: 'd'
// };
// //object literals first convert into string
// console.log(obj[1]);
// console.log(obj[null]);
// console.log(obj[undefined]);
// console.log(obj[true]);

// // console.log(obj.1);//here 1 is passed as int not string & 1 is string inside obl
// // console.log(obj.'1');//not allowed
// console.log(obj.null);
// console.log(obj.undefined);
// console.log(obj.true);


// //v6
// //add,update and delete in object literals
// const nwpost={
//     tag: ["@tag1", "@tag2"],
//     username: "abhishek",
//     content: "first js post",
//     likes: 1000000,
//     repost: 1000000,
// }

// //add
// nwpost.locatin = ["UP", "HR"];
// // nwpost[share]= 1212;//not allowed
// console.log(nwpost);

// //update
// nwpost.likes=9999999;
// console.log(nwpost);

// //delete
// delete nwpost.tag;
// console.log(nwpost);

// //v7
// //objects of objects
// const classinfo={
//     s1:{name:"abhi", rno: 1},
//     s2: {name:"shek", rno: 2},
//     s3: {name:"tiwari", rno: 3}
// };

// console.log(classinfo);
// console.log(classinfo.s1);
// console.log(classinfo.s2.rno);
// classinfo.s3={name: "hello", rno: 4};//this show in above console.log(classinfo)
// console.log(classinfo);

// //v8
// //array of objects
// const classinfo=[
//    {
//     name:"abhi",
//     rno: 1
//     },
   
//     {
//     name:"shek",
//     rno: 2
//     },

//     {
//     name:"tiwari", 
//     rno: 3
//     }
// ];

// console.log(classinfo);
// console.log(classinfo[0]);
// console.log(classinfo[1]);
// console.log(classinfo[2]);
// console.log(classinfo[0].name);
// classinfo[0].name="shek"
// console.log(classinfo);

// //v9
// //math object
// //properties
// console.log(Math.PI);
// console.log(Math.E);
// //methods
// console.log(Math.abs(-1));
// console.log(Math.pow(2,2));
// console.log(Math.floor(-5.5));
// console.log(Math.ceil(-5.5));
// console.log(Math.random());

// //v10
// //FACT Math.random() can never give 10, it give 0.0to0.9 so use Math.floor() so we add 1 to get 1to10
// let num= Math.random();
// console.log(num);
// console.log(Math.floor(num*10));
// console.log(Math.floor(num*10)+1);

//v11
//pr qs
console.log(Math.floor(Math.random()*100)+1);//generate 1 to 100
console.log(Math.floor(Math.random()*5)+20);//generate 45 to 55


//v12
//guessing game 
let userinput=prompt("Enter a no. between 1 to 100: ");
let guess=Math.floor(Math.random());

while(1)
{
    if(userinput==guess)
    {
        console.log("milgaya")
        break;
    }
    else if(userinput<guess)
        {
            userinput=prompt("your guess is low, enter again");
    
        }
        else
        {
            userinput=prompt("your guess is high, enter again");
    
        }
    
}


//v13
//assignment
//q1.

//q2.
console.log(Math.floor(Math.random()*6)+1);//random dice roll no.

//q3.