// JavaScript to handle top-up and balance update
document.getElementById('top-up-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get the top-up amount from the input field
    const topUpAmount = document.getElementById('top-up-amount').value;

    // Update the balance
    let currentBalance = parseInt(document.getElementById('balance-amount').textContent);
    currentBalance += parseInt(topUpAmount);
    document.getElementById('balance-amount').textContent = currentBalance;

    // Clear the input field
    document.getElementById('top-up-amount').value = '';
});
