const monthButton = document.getElementById('monthButton')
const dayButton = document.getElementById('dayButton')
const cvcButton = document.getElementById('cvcButton')
const monthNav = document.getElementById('monthNav')
const cvcNav = document.getElementById('cvcNav')
const dayNav = document.getElementById('dayNav')
const creditCardModal = document.getElementById('creditCardModal')
const paypalModal = document.getElementById('paypalModal')
const creditCardCheck = document.getElementById('creditCardCheck')
const paypalCheck = document.getElementById('paypalCheck')

function changeOpacity(element) {
    if (element.classList.contains('opacity-0')) {
        return element.classList.remove('opacity-0')
    } else {
        return element.classList.add('opacity-0')
    }
}

function changeModalBorder(element) {
    if (element === creditCardModal) {
        if (creditCardModal.classList.contains('border-blue-200')) {
            creditCardModal.classList.remove('border-blue-200')
        } else {
            creditCardModal.classList.add('border-blue-200')
        }

        if (!creditCardCheck.classList.contains('border-blue-200') && paypalModal.classList.contains('border-blue-200')) {
            paypalModal.classList.remove('border-blue-200')
            changeOpacity(paypalCheck)
        }

        changeOpacity(creditCardCheck)
    } 

    if (element === paypalModal) {
        if (paypalModal.classList.contains('border-blue-200')) {
            paypalModal.classList.remove('border-blue-200')
        } else {
            paypalModal.classList.add('border-blue-200')
        }
        
        // if paypalmodal isn't active and the other is, then remove that from credit cardm odal
        if (!paypalModal.classList.contains('border-blue-200') && creditCardModal.classList.contains('border-blue-200')) {
            creditCardModal.classList.remove('border-blue-200')
            changeOpacity(creditCardCheck)
        } else if (paypalModal.classList.contains('border-blue-200') && creditCardModal.classList.contains('border-blue-200')) {
            creditCardModal.classList.remove('border-blue-200')
            changeOpacity(creditCardCheck)
        }

        changeOpacity(paypalCheck)
    }
}

Array.from([monthButton, dayButton, cvcButton, creditCardModal, paypalModal]).forEach((element) => {
    element.addEventListener('click', () => {
        if (element === monthButton) {
            changeOpacity(monthNav)
        }
        
        if (element === dayButton) {
            changeOpacity(dayNav)
        } 
        
        if (element === cvcButton) {
            changeOpacity(cvcNav)
        }

        if (element === creditCardModal) {
            changeModalBorder(creditCardModal)
        }

        if (element === paypalModal) {
            changeModalBorder(paypalModal)
        }
    })
})
