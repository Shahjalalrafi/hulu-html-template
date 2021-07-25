const close = document.querySelector('.close')
const logIn = document.querySelector('.login-btn')
const modal = document.querySelector('.modal')

logIn.addEventListener('click', openModal)
close.addEventListener('click', closeModal)
window.addEventListener('click', outSideClick)

function openModal() {
    modal.style.display = 'block'
}

function closeModal () {
    modal.style.display = 'none'
}

function outSideClick(e) {
    if(e.target == modal) {
        closeModal()
    }
}