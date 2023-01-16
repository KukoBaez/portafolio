(function () {

    let navbar = document.querySelector('#navbar');
    let main = document.querySelector('main');
    let navbarHeight = navbar.getBoundingClientRect().height;
    let breakpoint = main.offsetTop - navbarHeight;
    let isfixed = false;

    let windowPos;

    function updatePos () {
        windowPos = window.scrollY;
    }

    function onScroll () {

        updatePos();

        if (windowPos >= breakpoint && !isfixed) {

            navbar.classList.remove('open');

            navbar.classList.add('navbar-fixed');
            main.style.cssText = 'margin-top: ' + navbarHeight + 'px;';
            isfixed = true;
        }

        else if (windowPos < breakpoint && isfixed){
            navbar.classList.remove('navbar-fixed');
            main.style.cssText = 'margin-top: ' + 0;
            isfixed = false;
        }
    }

        document.addEventListener('scroll', onScroll);
    

})()
