// Add JavaScript code here

const button = document.getElementById('nextPage')
const nextSection = document.getElementById('nextSection')
const currentSection = document.getElementById('currentSection')
const backButton = document.getElementById('backButton')

function goToNextPage() {
    nextSection.classList.remove('hidden')
    currentSection.classList.add('hidden')
    backButton.classList.remove('hidden')
}

function goBackPage() {
    nextSection.classList.add('hidden')
    currentSection.classList.remove('hidden')
    backButton.classList.add('hidden')
}

button.addEventListener('click', () => {
    goToNextPage()
})

backButton.addEventListener('click', () => {
    goBackPage()
})