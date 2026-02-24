(function(){
    'use strict';
    console.log('reading js');

    window.addEventListener('load', function(){
        const sections = document.querySelectorAll('section');
        const sun = document.querySelector('#sun');
        const moon = document.querySelector('#moon');
        const night = document.querySelector('#night');
        const nightSky = document.querySelector('#nightsky');
        const flashlightOff = document.querySelector('#flashlight-off');
        const flashlightOn = document.querySelector('#flashlight-on');
        
    
        const pictures = document.querySelectorAll('.picture');
        const closeBtns = document.querySelectorAll('.close');
    
        // -------------- preloader screen -----------------
        const preloader = document.getElementById('preloader');
            preloader.className = 'fadeout';
            preloader.addEventListener('animationend', function () {
                preloader.style.display = 'none';
            });
    
        // -------------- overlay functions -------------------
        for(const eachPicture of pictures) {
            eachPicture.addEventListener('click', function(event){
                event.preventDefault();
                const thisPicture = event.currentTarget.id;
                document.querySelector(`#ol-${thisPicture}`).className = 'overlay showing';
            });
        }
    
        for (const eachBtn of closeBtns){
            eachBtn.addEventListener('click', function(event){
                event.preventDefault();
                document.querySelector('.showing').className = 'overlay hidden';
            })
        }
    
        // ------------ making images unblur on scroll --------------
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
    
        //  ------------- time change settings ---------------
        window.addEventListener('scroll', function (){
            if (window.scrollY > 1000) {
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
    
        // -------------- turning flashlight on & off ---------------
        flashlightOff.addEventListener('click', function(){
            flashlightOn.className = '';
            flashlightOff.className = 'hidden';
        })
    
        flashlightOn.addEventListener('click', function(){
            flashlightOn.className = 'hidden';
            flashlightOff.className = '';
        })
    
    });
})();
