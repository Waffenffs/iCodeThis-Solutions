// Add JavaScript code here

const alerts = document.querySelectorAll('#alert')
const dismissed = document.getElementById('dismissed')
const delay = 1500
let count = 0

alerts.forEach((alert, index) => {
    setTimeout(() => {
        alert.classList.remove('hidden')
        alert.classList.add('section-animation')
    }, delay * index)

    alert.addEventListener('click', () => {
        alert.classList.add('alert')
        count++

        if (count == 3) {
            dismissed.classList.remove('hidden')
        }
    })
})
