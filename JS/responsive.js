burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.right-nav')


burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-height-resp')
    navList.classList.toggle('visibility-class-resp')
    rightNav.classList.toggle('visibility-class-resp')
})