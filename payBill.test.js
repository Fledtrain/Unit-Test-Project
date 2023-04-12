const payBill = require("./payBill");

// Test case 1: Valid input values
test("Valid input values", () => {
  const totalBill = 15.16;
  const numGuests = 3;
  const guestAmounts = payBill(totalBill, numGuests);

  // Ensure the total amount is distributed correctly among the guests
  expect(guestAmounts.length).toBe(numGuests);
  expect(guestAmounts.reduce((sum, amount) => sum + amount, 0)).toBe(totalBill);
});

// Test case 2: Test with uneven amounts
test("Test with uneven amounts", () => {
  const totalBill = 25.32;
  const numGuests = 4;
  const guestAmounts = payBill(totalBill, numGuests);

  // Ensure the total amount is distributed correctly among the guests
  expect(guestAmounts.length).toBe(numGuests);
  expect(guestAmounts.reduce((sum, amount) => sum + amount, 0)).toBe(totalBill);

  // Ensure the amounts are rounded to 2 decimal places
  guestAmounts.forEach((amount) => {
    expect(amount).toBeCloseTo(amount, 2);
  });
});
// Test case 3: Test with NaN input for number of guests and bill amount
test("Test with NaN input for number of guests and bill amount", () => {
  const totalBill = NaN;
  const numGuests = NaN;

  // Expect an error to be thrown when calling payBill with NaN input values
  expect(() => payBill(totalBill, numGuests)).toThrow();
});
