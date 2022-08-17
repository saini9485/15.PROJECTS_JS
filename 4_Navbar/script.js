window.onload = function(){
    const Button = document.getElementsByClassName('button')[0]
  const navbarLinks = document.getElementsByClassName('navbar-links')[0]
  
  Button.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
  })
  }