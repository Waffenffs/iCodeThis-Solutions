// Add JavaScript code here

const flights = document.getElementById('flights')
const hotels = document.getElementById('hotels')
const cars = document.getElementById('cars')

function changeTabState(element) {
    Array.from([flights, hotels, cars]).forEach((thisElement) => {
        if (thisElement !== element) {
            if (thisElement.classList.contains('active')) {
                thisElement.classList.remove('active')
            }

            thisElement.classList.add('inactive')
        }

        if (thisElement === element) {
            if (thisElement.classList.contains('inactive')) {
                thisElement.classList.remove('inactive')
            }

            thisElement.classList.add('active')
        }
    })
}

Array.from([flights, hotels, cars]).forEach((element) => {
    element.addEventListener('click', () => {
        changeTabState(element)
    })
})