window.addEventListener('load', function(){
    'use strict';
    console.log('reading js');

    const sections = document.querySelectorAll('section');
    const h1 = document.querySelector('header h1');
    const sun = document.querySelector('#sun');
    const moon = document.querySelector('#moon');
    const night = document.querySelector('#night');
    const nightsky = document.querySelector('#sky2');

    const observer = new IntersectionObserver(callBack);
    for (const eachSection of sections){
        observer.observe(eachSection);
    }
    

    function callBack(entries){
        for (const eachEntry of entries){
            if(eachEntry.isIntersecting){
                eachEntry.target.className = "show";
                observer.unobserve(eachEntry.target)
            } else {
                eachEntry.target.removeAttribute('class');
            }
        }
    }
    

    // sections.forEach(function (eachSection) {
    //     sectionTops.push(Math.floor(eachSection.getBoundingClientRect().top) + window.scrollY);
    // });
    
    // console.log(sectionTops);

    window.addEventListener('scroll', function (){
        if (window.scrollY > 900) {
            night.style.opacity = '1';
            nightsky.style.opacity = '1';
            h1.style.color = 'white';
            sun.style.top = '150px';
            moon.style.top = '50px';
        } else {
            night.style.opacity = '0';
            nightsky.style.opacity = '0';
            h1.style.color = 'black';
            sun.style.top = '50px';
            moon.style.top = '150px';
        }
    })
});