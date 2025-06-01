const month = 11
switch (month) {   //this is strict equality check
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case "3":
        console.log("March")
        break;
    case 4:
        console.log("January")
        break;
    case 5:
        console.log("January")
        break;
    case 6:
        console.log("January")
        break;
    case 7:
        console.log("January")
        break;
    case 8:
        console.log("January")
        break;
    case 9:
        console.log("January")
        break;
    case 10:
        console.log("January")
        break;
    case 11:
        console.log("November")
        //break;
    case 12:
        console.log("January")
        break;

    default: 
        console.log("Invalid number entered"); //Note : if there is no any break before the default case then the default is also executed
        
        break;
}