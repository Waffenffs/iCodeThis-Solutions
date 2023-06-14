// Add JavaScript code here

const button = document.getElementById('calculate')
const resultDiv = document.getElementById('resultDiv')
const inputPercentage = document.getElementById('percentage')
const inputNumber = document.getElementById('number')

button.addEventListener('click', () => {
    const percentage = parseFloat(inputPercentage.value)
    const number = parseFloat(inputNumber.value)
    const result = calculatePercentage(percentage, number)

    resultDiv.textContent = `Result: ${result}`
    
    if (resultDiv.classList.contains('hidden')) {
        resultDiv.classList.remove('hidden');
        resultDiv.style.opacity = '0';
        resultDiv.style.right = '-100%';
        resultDiv.style.transition = 'opacity 0.5s, right 0.5s';

        setTimeout(() => {
            resultDiv.style.opacity = '1';
            resultDiv.style.right = '0';
        }, 1000);
    }

    setTimeout(() => {
        resultDiv.classList.add('hidden')
    }, 2000)

})

function calculatePercentage(percentage, number) {
    return (percentage / 100) * number
}