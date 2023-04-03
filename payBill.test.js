const payBill = require("./payBill"); //Import the payBill function 

const totalBill = parseFloat(process.argv[2]);
const numGuests = parseInt(process.argv[3]);

if (isNaN(totalBill) || isNaN(numGuests)) {
  console.log(
    "Error: please provide a valid total bill amount and number of guests."
  );
} else {
  const guestAmounts = payBill(totalBill, numGuests);
  console.log("The following amounts are owed by each guest:");
  guestAmounts.forEach((amount, index) => {
    console.log(`Guest ${index + 1}: $${amount}`);
  });
}
