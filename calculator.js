window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values  = { amount: 320000, years: 25, rate: 5 };
  const loanAmount = document.querySelector('#loan-amount');
  loanAmount.value = values.amount;
  const termInYears = document.querySelector('#loan-years');
  termInYears.value = values.years;
  const loanRate = document.querySelector('#loan-rate');
  loanRate.value = values.rate;
  update();

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {

  const P = (values.amount);                                // P is your principal
  const i = (values.rate /100)/12;                               // i is your periodic interest rate, which is your interest rate divided by 12
  const n = (values.years) * 12                           // n is the total number of months in your loan term
  const numerator = P * i
  const denominator = (1 - Math.pow((1+i), -n))
  const MP = (numerator/denominator).toFixed(2);                    // Mp is your monthly loan payment
  return MP;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.querySelector('#monthly-payment');
  monthlyPayment.innerText = "$" + monthly;
}
