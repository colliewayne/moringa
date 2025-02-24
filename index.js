document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("savings")) {
        document.getElementById('savingsResult').innerHTML = localStorage.getItem("savings");
    }
});

function calculateSavings() {
    let income = parseFloat(document.getElementById('income').value) || 0;
    let expenses = parseFloat(document.getElementById('expenses').value) || 0;
    let savings = income - expenses;
    let resultText = "Your Savings: $" + savings;
    
    document.getElementById('savingsResult').innerHTML = resultText;
    localStorage.setItem("savings", resultText);
}