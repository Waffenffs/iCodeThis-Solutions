// Do something here

const chall1Button = document.getElementById('chall1Button')
const chall1ButtonSpan = document.getElementById('chall1ButtonSpan')
const chall1Submissions = document.getElementById('chall1Submissions')
const chall2Button = document.getElementById('chall2Button')
const chall2ButtonSpan = document.getElementById('chall2ButtonSpan')
const chall2Submissions = document.getElementById('chall2Submissions')
const chall3Button = document.getElementById('chall3Button')
const chall3ButtonSpan = document.getElementById('chall3ButtonSpan')
const chall3Submissions = document.getElementById('chall3Submissions')
const chall4Button = document.getElementById('chall4Button')
const chall4ButtonSpan = document.getElementById('chall4ButtonSpan')
const chall4Submissions = document.getElementById('chall4Submissions')

const inactiveStyling = `
    border-2 
    border-gray-300 
    transition 
    font-semibold 
    shadow
    delay-150 
    text-sm 
    tracking-wide 
    text-gray-600 
    py-2
    px-4 
    bg-gray-400 
    rounded-xl
    tracking-wide
`

function changeState(element) {
    element.classList = inactiveStyling
    
    setTimeout(() => {
        element.classList.add('cursor-not-allowed')
    }, 1000);
}

function submit(element) { 
    element.textContent = parseInt(element.textContent) + 1
}

chall1Button.addEventListener('click', () => {
    changeState(chall1ButtonSpan)
    submit(chall1Submissions)
    chall1Button.disabled = true
})
chall2Button.addEventListener('click', () => {
    changeState(chall2ButtonSpan)
    submit(chall2Submissions)
    chall2Button.disabled = true
})
chall3Button.addEventListener('click', () => {
    changeState(chall3ButtonSpan)
    submit(chall3Submissions)
    chall3Button.disabled = true
})
chall4Button.addEventListener('click', () => {
    changeState(chall4ButtonSpan)
    submit(chall4Submissions)
    chall4Button.disabled = true
})