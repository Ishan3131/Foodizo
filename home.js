window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    const nav_brand = document.getElementById('nav_brand');
    if(window.scrollY > 50){
        nav.classList.add('scroll');
        nav_brand.style.opacity = '100%';
    }
    else{
        nav.classList.remove('scroll');
        nav_brand.style.opacity = '0';
    }
})