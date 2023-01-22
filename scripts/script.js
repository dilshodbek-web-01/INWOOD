let loginModal = document.querySelector('.header-modal-login')
let close = document.getElementById('closeMenu')
let account = document.getElementById('account')

let modal = document.getElementById('menubar')
let menuOpen = document.getElementById('OpenMenu')
let menuClose = document.getElementById('menuclose')

close.addEventListener('click', () => {
  loginModal.style.display = 'none'
})
account.addEventListener('click', () => {
  loginModal.style.display = 'block'
})

menuOpen.addEventListener('click', (e) => {
  modal.style.top = 0
})

menuClose.addEventListener('click', (e) => {
  modal.style.top = '-100%'
})
