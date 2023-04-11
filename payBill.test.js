const payBill = require("./payBill"); //Import the payBill function 

//Get the total bill amount and number of guests from the command line
const totalBill = parseFloat(process.argv[2]);
const numGuests = parseInt(process.argv[3]);

// Check if the total bill amount and number of guests are valid
if (isNaN(totalBill) || isNaN(numGuests)) {
  console.log(
    "Error: Please provide a valid total bill amount and number of guests."
  );
} else {
  // Call the payBill function and print the guest amounts
  const guestAmounts = payBill(totalBill, numGuests);
  console.log("The following amounts are owed by each guest:");
  guestAmounts.forEach((amount, index) => {
    console.log(`Guest ${index + 1}: $${amount}`);
  });
}
