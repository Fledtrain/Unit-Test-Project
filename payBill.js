const payBill = (totalBill, numGuests) => {
  let perGuest = parseFloat((totalBill / numGuests).toFixed(2)); // Round to 2 decimal places
  let remainder = parseFloat((totalBill - perGuest * numGuests).toFixed(2)); // Calculate the remainder

  let guestAmounts = new Array(numGuests).fill(perGuest); // Fill an array with the per guest amount
  for (let i = 0; i < remainder * 100; i++) {
    let index = Math.floor(Math.random() * numGuests); // Pick a random guest index
    guestAmounts[index] = parseFloat((guestAmounts[index] + 0.01).toFixed(2)); // Add 1 cent to the guest's amount
  }

  return guestAmounts;
};

module.exports = payBill;
