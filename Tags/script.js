const tagContents = document.querySelectorAll('#tagContent')
const tagButtons = document.querySelectorAll('#tagButton')

tagButtons.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        tagContents.forEach((content) => {
            if (element.contains(content)) {
                content.textContent = 'About to be deleted'
            }
        })
    })

    element.addEventListener('mouseleave', () => {
        tagContents.forEach((content) => {
            if (element.contains(content)) {
                content.textContent = 'tag name'
            }
        })
    })
})

const categoryDropdownOne = document.getElementById('categoryDropdownOne')
const categoryDropdownTwo = document.getElementById('categoryDropdownTwo')
const categoryMenuOne = document.getElementById('categoryMenuOne')
const categoryMenuTwo = document.getElementById('categoryMenuTwo')

categoryDropdownOne.addEventListener('click', () => {
    categoryMenuOne.classList.toggle('hidden')
})
categoryDropdownTwo.addEventListener('click', () => {
    categoryMenuTwo.classList.toggle('hidden')
})