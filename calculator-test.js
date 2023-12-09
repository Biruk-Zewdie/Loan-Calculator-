
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount:30000, years:3, rate: 4.54}).toEqual(892.94));
});


it("should return a result with 2 decimal places", function() {
  expect (calculateMonthlyPayment({amount:320000, years:25, rate: 5}).toEqual(1870.69));
});

/// etc
