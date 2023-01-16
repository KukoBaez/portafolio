(function () {
    let navbar = document.querySelector('#navbar');
    let hamburger = document.querySelector('#hamburguer');
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('open');
    });
})()


