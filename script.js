// Computes and displays total non-compounded interest based on form input
// Called when 'Compute Interest' button is clicked
function compute() {
  // Get input values from form
  const principal = document.getElementById('principal').value;
  const rate = document.getElementById('rate').value;
  const years = document.getElementById('years').value;

  // Validate principal input value is a positive number:
  // If not alert and focus the principal input
  if (!principal || parseFloat(principal) <= 0) {
    alert('Enter a positive number');
    document.getElementById('principal').focus();
    return false;
  }

  // Calculate actual year interest would be received
  const year = new Date().getFullYear() + parseInt(years);

  // Calculate interest earned (without compounding)
  const interest = (principal * years * rate) / 100;

  // Update result text
  const result = document.getElementById('result');
  result.innerHTML = `If you deposit <mark>${principal}</mark>,
  <br/>
  at an interest rate of <mark>${rate}%</mark>.
  <br/>
  You will receive an amount of <mark>${interest}</mark>,
  <br/>
  in the year <mark>${year}</mark>`;
}

// Update displayed rate value when interest rate input changes
function updateRate() {
  const rateval = document.getElementById('rate').value;
  document.getElementById('rate_val').innerText = rateval + '%';
}
