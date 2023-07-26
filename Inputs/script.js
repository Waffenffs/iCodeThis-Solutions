const smartSortingButton = document.getElementById('smartSortingButton')
const handle = document.getElementById('handle')
const typeButton = document.getElementById('typeButton')
const typeNav = document.getElementById('typeNav')

smartSortingButton.addEventListener('click', () => {
    handle.classList.toggle('right-0')
})

typeButton.addEventListener('click', () => {
    typeNav.classList.toggle('hidden')
})