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

function cottageOption(){
    let selectedOption = document.getElementById('cottageType').value;
    //console.log(selectedOption);
    switch (parseInt(selectedOption))
    {
        case 0: console.log(selectedOption);document.getElementById('labelPrice').innerHTML = "Php 0.00";
        break;

        case 1: console.log(selectedOption);document.getElementById('labelPrice').innerHTML = "Php 3,000.00";
        break;

        case 2: console.log(selectedOption);document.getElementById('labelPrice').innerHTML = "Php 2,000.00";
        break;

        case 3: console.log(selectedOption);document.getElementById('labelPrice').innerHTML = "Php 1,000.00";
        break;

        default: document.getElementById('labelPrice').innerHTML = "Php 0.00";
    }
}

function onLoadPage(page){
    // console.log('test');
    let heroDiv = document.getElementById('hero');
    console.log(heroDiv);
    heroDiv.style.width = '100%';
    heroDiv.style.height = '92vh';
    heroDiv.style.objectFit = 'cover';
    if (page=='about'){
        heroDiv.style.backgroundImage = 'url(/images/beach7.jpg)';
        heroDiv.style.color = 'white';
    }
    else {
        heroDiv.style.backgroundImage = 'url(/images/beach12.jpg)';    
        heroDiv.style.color = 'black';
    }
    heroDiv.style.backgroundSize = 'cover';   
}