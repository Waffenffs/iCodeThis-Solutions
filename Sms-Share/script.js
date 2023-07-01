const nationalityButton = document.getElementById('nationalityButton')
const selection = document.getElementById('selection')

nationalityButton.addEventListener('click', () => {
    if (selection.classList.contains('hidden')) {
        selection.classList.remove('hidden')
    } else {
        selection.classList.add('hidden')
    }
})