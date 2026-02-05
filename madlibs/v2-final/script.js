(function(){
    "use strict";
    console.log ('reading js');

    const sections = document.querySelectorAll('section');

    document.querySelector('#gotoinput2').addEventListener('click', function() {
        
        sections[1].className = "hidden";
        sections[2].className = "madlib-input";
    });

    document.querySelector('#back').addEventListener('click', function() {
        
        sections[1].className = "madlib-input";
        sections[2].className = "hidden";
    });

    document.querySelector('.madlib-input form').addEventListener('submit', function(event) {
        event.preventDefault();
        sections[0].className = "hidden";
        sections[1].className = "hidden";
        sections[2].className = "hidden";
        sections[3].className = '';
        sections[4].className = "madlib-input";     
        
        const exclaimation = document.querySelector('#exclaimation').value;
        const name = document.querySelector('#name').value;
        const city = document.querySelector('#city').value;
        const adj1 = document.querySelector('#adj1').value;
        const noun1 = document.querySelector('#noun1').value;
        const animal = document.querySelector('#animal').value;
        const job = document.querySelector('#job').value;
        const adj2 = document.querySelector('#adj2').value;
        const noun2 = document.querySelector('#noun2').value;
        const food = document.querySelector('#food').value;
        const noun3 = document.querySelector('#noun3').value;
        const tvshow = document.querySelector('#tvshow').value;
        const sounding = document.querySelector('#sounding').value;
        const number1 = document.querySelector('#number1').value;
        const verb = document.querySelector('#verb').value;
        const adj3 = document.querySelector('#adj3').value;
        const noun4 = document.querySelector('#noun4').value;
        const number2 = document.querySelector('#number2').value;
        const pluralnoun = document.querySelector('#pluralnoun').value;
    });

    const myForm = document.querySelectorAll('form');
    // const madlib = document.querySelector('#madlib');

    // myForm.addEventListener('submit', function(event){
    //     event.preventDefault();

        
    // });





}());