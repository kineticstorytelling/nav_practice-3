const navSlide = ()=>{
    const burger= document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li');
    
    burger.addEventListener('click',()=>{
        //Toggle Nav
        nav.classList.toggle('nav-active');
        //Animate Links(calculates the delay for each one so it cascades)
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation ='';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`
            }
        });
        //Burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();