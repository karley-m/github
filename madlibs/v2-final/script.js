(function(){
    "use strict";
    console.log ('reading js');

    const sections = document.querySelectorAll('section');
    const error = document.querySelector('#error');
    const output1 = document.querySelector('#output1');
    const header = document.querySelector('header');
    

    document.querySelector('#gotoinput2').addEventListener('click', function(event) {
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
        

        event.preventDefault();
        if(exclaimation == '') {
            error1.innerHTML = 'please provide an exclaimation'
            document.querySelector('#exclaimation').focus();
        } else if (name === '') {
            error1.innerHTML = 'please provide a name'
            document.querySelector('#name').focus();
        } else if (city == '') {
            error1.innerHTML = 'please provide a city'
            document.querySelector('#city').focus();
        } else if (adj1 == '') {
            error1.innerHTML = 'please provide an adjective'
            document.querySelector('#adj1').focus();
        } else if (noun1 == '') {
            error1.innerHTML = 'please provide a noun'
            document.querySelector('#noun1').focus();
        } else if (animal == '') {
            error1.innerHTML = 'please provide an animal'
            document.querySelector('#animal').focus();
        } else if (job == '') {
            error1.innerHTML = 'please provide a job'
            document.querySelector('#job').focus();
        } else if (adj2 == '') {
            error1.innerHTML = 'please provide an adjective'
            document.querySelector('#adj2').focus();
        } else if (noun2 == '') {
            error1.innerHTML = 'please provide a noun'
            document.querySelector('#noun2').focus();
        } else if (food == '') {
            error1.innerHTML = 'please provide a food'
            document.querySelector('#food').focus();
        } else {
            sections[1].className = "hidden";
            sections[2].className = "madlib-input";
            error1.innerHTML = '';
        }

    });

    document.querySelector('#back').addEventListener('click', function() {
        sections[1].className = "madlib-input";
        sections[2].className = "hidden";
        error1.innerHTML = '';
    });

    document.querySelector('#submit').addEventListener('click', function(event) {

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

        event.preventDefault();
        if(noun3 == '') {
            error2.innerHTML = 'please provide a noun'
            document.querySelector('#noun3').focus();
        } else if (tvshow === '') {
            error2.innerHTML = 'please provide a TV show'
            document.querySelector('#tvshow').focus();
        } else if (sounding == '') {
            error2.innerHTML = 'please provide a sound ending in "ing"'
            document.querySelector('#sounding').focus();
        } else if (number1 == '') {
            error2.innerHTML = 'please provide a number'
            document.querySelector('#number1').focus();
        } else if (verb == '') {
            error2.innerHTML = 'please provide a verb'
            document.querySelector('#verb').focus();
        } else if (adj3 == '') {
            error2.innerHTML = 'please provide an adjective'
            document.querySelector('#adj3').focus();
        } else if (noun4 == '') {
            error2.innerHTML = 'please provide a noun'
            document.querySelector('#noun4').focus();
        } else if (number2 == '') {
            error2.innerHTML = 'please provide a number'
            document.querySelector('#number2').focus();
        } else if (pluralnoun == '') {
            error2.innerHTML = 'please provide a plural noun'
            document.querySelector('#pluralnoun').focus();
        } else {
            sections[0].className = "hidden";
            sections[1].className = "hidden";
            sections[2].className = "hidden";
            sections[3].className = null;
            sections[4].className = "madlib-output";
            error2.innerHTML = '';

            header.innerHTML = "<h1>it's a shrew! what's he saying?</h1>";
            header.style.paddingBottom = "20px"
            header.style.textAlign = "center";

            output1.innerHTML = `<p><span>${exclaimation}</span> Hi there, I'm so sorry to bother you, but I am a lost little shrew. My name is <span>${name}</span> and I seem to have fallen in your pocket when you traveled to <span>${city}</span>. Where are we by the way? Is this some kind of <span>${adj1}</span> <span>${noun1}</span>? I've never seen a human up close. The largest animal I've probably seen is a <span>${animal}</span>. Do you think you'd win in a fight against a <span>${animal}</span>? Probably, right? Back home, I work as a <span>${job}</span> in shrew society. I live in the <span>${adj2}</span> <span>${noun2}</span>. I hope you washed your hands recently! I am deathly allergic to <span>${food}</span>. Doc says I have only a few minutes if I'm expose, which is why I carry a <span>${noun3}</span> at all times. Back to business, right. I fell in your pocket because I got distracted when you were watching <span>${tvshow}</span> on the TV and fell asleep, right in your luggage. Next thing I know, I woke up to the sound of <span>${sounding}</span> and here we are.</p>`
            
        }
             
        
        
        
    });

    
    
    




}());