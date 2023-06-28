// Add JavaScript code here

const button = document.getElementById('transitionModes')
const screen = document.getElementById('screen')
const article = document.getElementById('article')
const svgContainers = document.querySelectorAll('#svgContainer')

// dark mode colors:
 // screen = #022063
 // borders = white
 // svgs/reg text = slate-800
 // button text = black
 // button bg = white

button.addEventListener('click', () => {

    if (screen.classList.contains('bg-white')) {
        screen.classList.remove('bg-white')
        screen.classList.add('bg-[#022063]')
    } else {
        screen.classList.add('bg-white')
        screen.classList.remove('bg-[#022063]')
    }

    if (article.classList.contains('border-[#002160]')) {
        article.classList.remove('border-[#002160]')
        article.classList.add('border-white')
    } else {
        article.classList.add('border-[#002160]')
        article.classList.remove('border-white')
    }

    if (article.classList.contains('bg-white')) {
        article.classList.remove('bg-white')
        article.classList.add('bg-[#071637]')
    } else {
        article.classList.remove('bg-[#071637]')
        article.classList.add('bg-white')
    }

    svgContainers.forEach((svgContainer) => {
        if (!svgContainer.classList.contains('border-slate-700')) {
            svgContainer.classList.add('border-slate-700')
        } else {
            svgContainer.classList.remove('border-slate-700')
        }
    })

    if (button.classList.contains('bg-[#012262]')) {
        button.classList.remove('bg-[#012262]')
        button.classList.add('bg-white')
        button.classList.add('text-black')
    } else {
        button.classList.add('bg-[#012262]')
        button.classList.remove('bg-white')
        button.classList.remove('text-black')
    }
})