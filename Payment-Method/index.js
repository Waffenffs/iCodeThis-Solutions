// For some reason, the code may only work after refreshing the browser.
// I've tried looking into it, but no solution has given me a way to fix this behavior.
// It could be an issue with my browser itself (chrome).

document.addEventListener('DOMContentLoaded', () => {
    const selection = document.querySelectorAll('#selection');
    
    function changeActiveSelection(clickedElement) {
        selection.forEach((element) => {
            if (element !== clickedElement) {
                if (element.classList.contains('active')) {
                    element.classList.remove('active')
                    element.classList.add('inactive')
                }
            }
    
            if (element === clickedElement) {
                if (element.classList.contains('inactive')) {
                    element.classList.remove('inactive')
                    element.classList.add('active')
                }
            }
        })
    }
    
    selection.forEach((element) => {    
        element.addEventListener('click', () => {
            changeActiveSelection(element)
        })
    })
})
