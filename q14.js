let customerCash = 5000;
let withdrawCash = 6000; 
if (withdrawCash > customerCash) {
    console.log("Withdrawal FAILED! Sorry, you do not have sufficient balance.");
} else {
    console.log("Withdrawal SUCCESS! Your new balance is Rs. " + (customerCash - withdrawCash));
}