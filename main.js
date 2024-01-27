function calculateMaturityAmount() {
    //Get Input Values From Form elements

    const principle = parseFloat(document.getElementById('principle').value)
    const interestRate = parseFloat(document.getElementById('interestRate').value)
    const tenure = parseFloat(document.getElementById('tenure').value)

    //Calculate
    const maturityAmount = principle + (principle * interestRate * tenure) / 100

    // Display Result
    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`
}


// Button Click
document.getElementById('calculateBtn').addEventListener('click', calculateMaturityAmount);
