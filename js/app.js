const navSlide = () => {
    //variable na maghohold ng cssSelectors 
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //toggle ng nav
        nav.classList.toggle('nav-active');

        //animation ng mga links or delay
        navLinks.forEach((link, index) => {
            // link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
            console.log(index);
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
            }
        });
        //animation to ekis the burger
        burger.classList.toggle('toggle');

    });

}
navSlide();