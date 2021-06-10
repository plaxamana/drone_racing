const openMenu = document.querySelector('.menu-btn')
      closeMenu = document.querySelector('.exit-btn')
      nav = document.getElementById('nav');

openMenu.addEventListener('click', () => {
  nav.style.transform = 'translateX(0)'
})

closeMenu.addEventListener('click', () => {
  nav.style.transform = 'translateX(100%)'
})
