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