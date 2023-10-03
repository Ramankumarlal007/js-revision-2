//switch case

let month = "may"

switch (month) {
    case "jan":
        // {console.log("month is january")}
       {
        console.log("month is january")
        console.log("happie new year")
       }
        break;
    case "feb":
        {console.log("month is february");}
        // break;
    case "march":
        {console.log("month is march");}
        break;
    case "april":
        {console.log("month is april");}
        break;
    case "may":
        {console.log("month is may");}
        // break;
    case "june":
        {console.log("month is june");}
        break;
    default: {
        console.log(`default value match ${month}`);
    }
        break;
}

//break is important to give, otherwise after executing the desired match code it will execute the entire fall through except the default value




















