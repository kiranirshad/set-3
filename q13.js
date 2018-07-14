let customerSays = "Is UIT open today?"; 

switch(customerSays) {
    case "Hi":
    case "Hello":
    case "Hey":
    case "Salam":
        console.log("Thank you for calling TechKaro Customer Service. How may I help you?");
        break;
    case "Is UIT open today?":
        console.log("Yes");
        break;
    case "What are the timings of today's class?":
        console.log("1:30 - 5:3");
        break;
    case "Where will the class be conducted?":
        console.log("At CL-1, Usman Institute");
        break;
    default:
        console.log("Sorry, I do not understand your question");
}