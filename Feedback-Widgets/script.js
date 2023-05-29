const submitButton = document.getElementById('submit')
const skipButton = document.getElementById('skip')
const backButton = document.getElementById('back')
const moodSection = document.getElementById('mood')
const scaleSection = document.getElementById('scale')
const buttons = [submitButton, skipButton]
const scaleButtons = document.querySelectorAll('.scale-btn')

const disableOtherButtons = (btnValue) => {
    scaleButtons.forEach((btn) => {
        if (btn.value !== btnValue) {
            btn.classList.remove('bg-blue-800')
            btn.classList.remove('text-white')
            btn.classList.remove('scale-90')
        }
    })
}

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        // current page is scale
        if (moodSection.classList.contains('hidden')) {
            moodSection.classList.remove('hidden')
            scaleSection.classList.add('hidden')
            backButton.classList.remove('hidden')
            skipButton.classList.add('text-white')
        }
    })
})

backButton.addEventListener('click', () => {
    moodSection.classList.add('hidden')
    scaleSection.classList.remove('hidden')
    backButton.classList.add('hidden')
    skipButton.classList.remove('text-white')
}) 

scaleButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        disableOtherButtons(btn.value)
        btn.classList.add('bg-blue-800')
        btn.classList.add('text-white')
        btn.classList.add('scale-90')
    })
})