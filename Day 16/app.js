//v1
//telling about methods which is accessed using . after variable

//v2
//.trim() methods for string
let pass=prompt("password");
console.log(`pass: ${pass}`);
console.log(`pass.trim(): ${pass.trim()}`);

//v3
//string are immutable 
let a="     2 32     ";
console.log(a);
console.log(a.trim());
console.log(a); 

//v4
//toUpperCase() and toLowerCase()
let n="sfsdfAAAAA";
console.log(n.toUpperCase());
console.log(n.toLowerCase());


//v5
//method with argument, indexof(arg)

let ms='2323afaf3';
console.log(ms.indexOf('1'));
console.log(ms.indexOf('a'));
console.log(ms.indexOf('f'));
console.log(ms.indexOf('2'));

//v6
//method chaining
let msg="   fsdfs  AAA   ";
newmsg=msg.trim().toUpperCase();
console.log(newmsg);

//v7
//slice method
let msg="0123456789";
console.log(msg.slice(4));//slice(4, 9)
console.log(msg.slice(4,msg.length));
console.log(msg.slice(4,10));//slice(4, 10-1)
console.log(msg.slice(-1));//slice(lenght-1)

//v8
//replace and repeat method
let nam="ram";
// console.log(nam.slice("ram", "krishan"));
console.log(nam.replace("ram", "krishan"));
console.log(nam.repeat(101));

//v9
//praqs
// Q1.
let msg="help!";
console.log(msg.trim().toUpperCase());
// Q2.

// Q3.
let nam="apnaCollege";
let i=nam.indexOf("College");
console.log(nam.slice(i).replace('l', 't').replace('l', 't'));

//v10
// array data structure
let num=["one", "two", "three"];
console.log(num);

//v11
// array data access
let num=["one", "two", "three"];
console.log(num[0]);
console.log(num[1]);
console.log(num[2]);
console.log(num[3]);

//v12
//js array is different than other lang
let num=["one", 1, 1.0];//mixed array
console.log([].length);
console.log(["one", 1, 1.0].length);
console.log(num[0][0]);
console.log(num[0].length);
console.log(num[1].length);

//v13
//js arrays are mutable
let fruits=["apple", "kiwi", "amrood"];
fruits[0]="seb";
fruits[10]="jamun";//js array allow insertion beyond lenght
console.log(fruits); 

//v14
//array methods
let followers=['a', 'b', 'c', 'd', 'e', 'f'];
let blocked=['g', 'h'];
console.log(`followers: ${followers}`);
console.log(`blocked: ${blocked}`);

followers.push('g');//add at the end
console.log(`followers: ${followers}`);
console.log(`blocked: ${blocked}`);

followers.pop();//remove from the end and return it
console.log(`followers: ${followers}`);
console.log(`blocked: ${blocked}`);

blocked.unshift('i');//add at start
console.log(`followers: ${followers}`);
console.log(`blocked: ${blocked}`);

blocked.shift();//delete at start and return it
console.log(`followers: ${followers}`);
console.log(`blocked: ${blocked}`);

//v15
//pr qs
let month=['january', 'july', 'march', 'august'];
console.log(month);
// let i=1, j;
// while(i<=2)
// {
//     if(i==2)
//     {
//         j=month.shift();
//         break;        
//     } 
//     month.shift();
// }
month.shift();
month.shift();
month.unshift('june');
month.unshift('july');
console.log(month);


//v16
//indexOf and includes method for array
let n=[1, 2, 3, 4, 5, 6];
console.log(n.indexOf(4));//indexof()
console.log(n.indexOf(7));

console.log(n.includes(4));
console.log(n.includes());


//v17
//concat and reverse method for array
let n1=[1, 2, 3,];
let n2=[4, 5, 6];

n1=n1.concat(n2);//concat method and this is temporary
console.log(n1);

n1.reverse();//reverse method and this is permanent
console.log(n1);

//v18
//slice method for array nad this is temporary
let n=[1, 2, 3, 4, 5, 6];
console.log(n.slice(1));
console.log(n.slice(1,4));
console.log(n.slice());
console.log(n.slice(-1));
console.log(n.slice(-5));
console.log(n.slice(n.length));

//v19
//splice method for array = it add, delete, replace 
let n=[1, 2, 3, 4, 5, 6];
console.log(n);
console.log(n.splice(4));
console.log(n);
console.log(n.splice(1,2));
console.log(n);
console.log(n.splice(0,0,22,44,55));
console.log(n);

//v20
//sort method for array and it change data into string first and then use the data
let st=["asdfa", "sdfada", "werwr", "onfivn"];
let nu=[1443,4334,1,34,3,5]

console.log(st.sort());
console.log(nu.sort());

//v21
//pr qs
let month=['january', 'july', 'march', 'august'];
month.splice(0, 2, 'july', 'june')
console.log(month);

let ln=['c', "c++", 'javascript', 'python', 'sql'];
console.log(ln.reverse().indexOf('javascript'));

//V22
//array reference
console.log("name"=="name");
console.log("name"==="name");
console.log([1]==[1]);
console.log([1]===[1]);
console.log([]==[]);
console.log([]===[]);

let arr=['a', 'b', 'c'];
let arrcopy=arr;
console.log(arr);
console.log(arrcopy);

console.log(arr==arrcopy);
console.log(arr==arrcopy);

arr.push('d');
console.log(arr);
console.log(arrcopy);

arrcopy.pop();
console.log(arr);
console.log(arrcopy);

//V23
//const behaviour with variable and array
const ar=[1, 2 ,3];
console.log(ar);

ar.pop();
console.log(ar);

ar.push(23);
console.log(ar);

ar.unshift(0);
console.log(ar);

const g=9.8;
console.log(g);
g=10;

//v24
//nested array
const ar=[[1, 2 ,3], [231, 232 ,3], [12, 23 ,34]];
console.log(ar[2][0]);
console.log(ar[2][12]);
console.log(ar[1][1]);
console.log(ar[0][1]);

//v25
//pr qs
let tic_tac_toe=[['x'," ", 'o'], [" ", 'x', " "], ['o', " ", 'x']];
console.log(tic_tac_toe);