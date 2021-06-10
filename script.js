const openMenu = document.querySelector('.open-menu')
      closeMenu = document.querySelector('.close-menu')
      nav = document.getElementById('nav');

openMenu.addEventListener('click', () => {
  nav.style.transform = 'translateX(0)'
})

closeMenu.addEventListener('click', () => {
  nav.style.transform = 'translateX(100%)'
})
