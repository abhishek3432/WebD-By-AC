//Q1.create a number variable num with some value.now, priny "good" if the number is divisible by 10 and print "bad" if it is not
let num=prompt("Enter num: ");
if(num%10==0)
{
    console.log("good");
}
else
    console.log("bad");

//Q2.
let username=prompt("Enter your name: ");
let age= prompt("Enter your age: ");
alert(`${username} is ${age} years old.0`);

// Q3.
let quarter=prompt("months in quarter: ");//num conver to string here 
switch (quarter)
{
    case '1':
        console.log("January, February, March");
        break;
    
    case 2:
        console.log("April, May, June");
        break;

    case 3:
        console.log("July, August, September");
        break;
    
    case 4:
        console.log("Ocotber, Novembr, December");
        break;
}

// Q4.
let n="Abhishek";
if((n[0]=='A')||(n[0]=='a')&& n.length>5 )
{
    console.log("golden");
}
else
    console.log("not golden");

// Q5.
let n1=1,n2=2, n3=3;
if(n1>n2)
{
    if(n1>n3)
    {
        console.log(n1);
    }
    else
    console.log(n3);
}
else if(n2>n3)
{
    console.log(n2);
}
else
console.log(n3);


//Q6.
let n1=32, n2=13212;
if(n1%10==n2%10)
{
    console.log("same last digit");
}
else
    console.log("Not same last digit");