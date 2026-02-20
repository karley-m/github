window.addEventListener('load', function(){
    'use strict';
    console.log('reading js');

    const sections = document.querySelectorAll('section');
    const sun = document.querySelector('#sun');
    const moon = document.querySelector('#moon');
    const night = document.querySelector('#night');
    const nightSky = document.querySelector('#nightsky');

    function pictures(){
        const picnicInfo = document.querySelector('#picnicInfo');
        const lakeInfo = document.querySelector('#lakeInfo');
        const bearInfo = document.querySelector('#bearInfo');
        const smokeyInfo = document.querySelector('#smokeyInfo');
        const mountainInfo = document.querySelector('#mountainInfo');
        const firepitInfo = document.querySelector('#firepitInfo');
        const pawprintsInfo = document.querySelector('#pawprintsInfo');
    }
    
    // put each of these const's 

    let sectionTops = [];

    const observer = new IntersectionObserver(callBack);

    for (const eachSection of sections){
        observer.observe(eachSection);
    }
    

    function callBack(entries){
        for (const eachEntry of entries){
            if(eachEntry.isIntersecting){
                eachEntry.target.className = "picture show";
                // observer.unobserve(eachEntry.target)
            } else {
                eachEntry.target.removeAttribute('class');
            }
        }
    }
    

    sections.forEach(function (eachSection) {
        sectionTops.push(Math.floor(eachSection.getBoundingClientRect().top) + window.scrollY);
    });
    
    console.log(sectionTops);

    window.addEventListener('scroll', function (){
        if (window.scrollY > 900) {
            night.style.opacity = '1';
            nightSky.style.opacity = '1';
            sun.style.top = '112px';
            moon.style.top = '-8px';
        } else {
            night.style.opacity = '0';
            nightSky.style.opacity = '0';
            sun.style.top = '1px';
            moon.style.top = '100px';
        }
    })
});