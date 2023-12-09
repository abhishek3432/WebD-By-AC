//v1
//keywords
const student= {
    name: "abhishek",
    age: 19,
    toc: 40,
    os: 60,
    mp: 55,
    getAvg()
    {
        //this function can access variable using this keyword
        let avg=(this.toc + this.os + this.mp)/3;
        console.log(avg);
    }
}

student.getAvg();//console.log is similar like it

//when getAvg is defined outside
function getAvg()
    {
        //this function can access variable using this keyword
        let avg=(this.toc + this.os + this.mp)/3;
        console.log(avg);
    }

console.log(getAvg());
console.log(window);
console.log(alert("using alert"));//this and below don't need console.log to print
console.log(window.alert("using window.alert"));
console.log(window.getAvg());
console.log("sab badhiya chal raha hai");