function calculateMaturityAmount() {
    //Get Input Values From Form elements

    const principle = parseFloat(document.getElementById('principle').value)
    const interestRate = parseFloat(document.getElementById('interestRate').value)
    const period = parseFloat(document.getElementById('period').value)

    //Calculate
    const maturityAmount = principle + (principle * interestRate * period) / 100

    // Display Result
    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`
}


// Button Click
document.getElementById('calculateBtn').addEventListener('click', calculateMaturityAmount);
