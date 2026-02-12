(function(){
    "use strict";
    console.log ('reading js');

    /* --------- grabbing sections ---------------------------- */
    const sections = document.querySelectorAll('section');
    const error = document.querySelector('#error');
    const output1 = document.querySelector('#output1');
    const output2 = document.querySelector('#output2');
    const output3 = document.querySelector('#output3');
    const header = document.querySelector('header');
    const error1 = document.querySelector('#error1');
    const error2 = document.querySelector('#error2');
    
    /* --------- 'Next' button on first input page ---------------------------- */
    document.querySelector('#gotoinput2').addEventListener('click', function(event) {
        /* --------- grabbing input values for this section ---------------------------- */
        const exclaimation = document.querySelector('#exclaimation').value;
        const name = document.querySelector('#name').value;
        const city = document.querySelector('#city').value;
        const adj1 = document.querySelector('#adj1').value;
        const noun1 = document.querySelector('#noun1').value;
        const animal = document.querySelector('#animal').value;
        const job = document.querySelector('#job').value;
        const food = document.querySelector('#food').value;
        const noun2 = document.querySelector('#noun2').value;
        const tvshow = document.querySelector('#tvshow').value;

        
        event.preventDefault();
        /* --------- checking for errors ---------------------------- */
            if(exclaimation == '') {
                error1.innerHTML = 'please provide an exclaimation'
                document.querySelector('#exclaimation').focus();
            } else if (name === '') {
                error1.innerHTML = 'please provide a name'
                document.querySelector('#name').focus();
            } else if (city == '') {
                error1.innerHTML = 'please provide a city'
                document.querySelector('#city').focus();
            } else if (animal == '') {
                error1.innerHTML = 'please provide an animal'
                document.querySelector('#animal').focus();
            } else if (job == '') {
                error1.innerHTML = 'please provide a job'
                document.querySelector('#job').focus();
            } else if (adj1 == '') {
                error1.innerHTML = 'please provide an adjective'
                document.querySelector('#adj1').focus();
            } else if (noun1 == '') {
                error1.innerHTML = 'please provide a noun'
                document.querySelector('#noun1').focus();
            } else if (food == '') {
                error1.innerHTML = 'please provide a food'
                document.querySelector('#food').focus();
            } else if (noun2 == '') {
                error1.innerHTML = 'please provide a noun'
                document.querySelector('#noun2').focus();
            } else if (tvshow == '') {
                error1.innerHTML = 'please provide a TV show'
                document.querySelector('#tvshow').focus();
            } else {
                sections[1].className = "hidden";
                sections[2].className = "madlib-input";
                error1.innerHTML = '';
            }

    });

    /* --------- back button on input page 2 ---------------------------- */
    document.querySelector('#back').addEventListener('click', function() {
        sections[1].className = "madlib-input";
        sections[2].className = "hidden";
        error1.innerHTML = '';
    });

    /* --------- 'Submit' button on input page 2 ---------------------------- */
    document.querySelector('#submit').addEventListener('click', function(event) {
        /* --------- grabbing input values for all inputs ---------------------------- */
        const exclaimation = document.querySelector('#exclaimation').value;
        const name = document.querySelector('#name').value;
        const city = document.querySelector('#city').value;
        const animal = document.querySelector('#animal').value;
        const job = document.querySelector('#job').value;
        const adj1 = document.querySelector('#adj1').value;
        const noun1 = document.querySelector('#noun1').value;
        const food = document.querySelector('#food').value;
        const noun2 = document.querySelector('#noun2').value;
        const tvshow = document.querySelector('#tvshow').value;
        const sounding = document.querySelector('#sounding').value;
        const number1 = document.querySelector('#number1').value;
        const verb = document.querySelector('#verb').value;
        const adj2 = document.querySelector('#adj2').value;
        const noun3 = document.querySelector('#noun3').value;
        const number2 = document.querySelector('#number2').value;
        const pluralnoun = document.querySelector('#pluralnoun').value;


        event.preventDefault();
        /* --------- checking for errors ---------------------------- */
        if(sounding == '') {
            error2.innerHTML = 'please provide a sound ending in "ing"'
            document.querySelector('#sounding').focus();
        } else if (number1 == '') {
            error2.innerHTML = 'please provide a number'
            document.querySelector('#number1').focus();
        } else if (verb == '') {
            error2.innerHTML = 'please provide a verb'
            document.querySelector('#verb').focus();
        } else if (noun3 == '') {
            error2.innerHTML = 'please provide a noun'
            document.querySelector('#noun3').focus();
        } else if (number2 == '') {
            error2.innerHTML = 'please provide a number'
            document.querySelector('#number2').focus();
        } else if (pluralnoun == '') {
            error2.innerHTML = 'please provide a plural noun'
            document.querySelector('#pluralnoun').focus();
        } else {
            /* --------- show output pages, hide input pages ---------------------------- */
            sections[0].className = "hidden";
            sections[1].className = "hidden";
            sections[2].className = "hidden";
            sections[3].className = null;
            sections[4].className = "madlib-output";
            error2.innerHTML = '';

            /* --------- changing header html ---------------------------- */
            header.innerHTML = "<h1>it's a shrew! what's he saying?</h1>";
            header.style.paddingBottom = "20px"
            header.style.textAlign = "center";

            /* --------- madlibs output 1 ---------------------------- */
            output1.innerHTML = `<p><span>${exclaimation}</span> - hi there, I'm so sorry to bother you, but I am a lost little shrew. My name is <span>${name}</span> and I seem to have fallen in your pocket when you traveled to <span>${city}</span>. Where are we by the way? I've never seen a human up close. The largest animal I've probably seen is a <span>${animal}</span>. Do you think you'd win in a fight against a <span>${animal}</span>? Probably, right? Back home, I work as a <span>${job}</span> in shrew society. I live in the <span>${adj1}</span> <span>${noun1}</span>. I hope you washed your hands recently! I am deathly allergic to <span>${food}</span>. Doc says I have only a few minutes if I'm exposed, which is why I carry a/an <span>${noun2}</span> at all times. Back to business, right. I fell in your pocket because I got distracted when you were watching <span>${tvshow}</span> on the TV and fell asleep, right in your luggage. Next thing I know, I woke up to the sound of <span>${sounding}</span> and here we are.</p>`
            
            /* --------- "Ok..." button on output page 1 ---------------------------- */
            document.querySelector('#gotooutput2').addEventListener('click', function(event) {
                event.preventDefault();
    
                /* --------- grabbing values for output page 2 ---------------------------- */
                const number1 = document.querySelector('#number2').value;
                const verb = document.querySelector('#verb').value;
                const adj2 = document.querySelector('#adj2').value;
                
                /* --------- switching sections ---------------------------- */
                sections[3].className = "hidden";
                sections[4].className = "hidden";
                sections[5].className = null;
                sections[6].className = "output2";
                
                /* --------- madlibs output 2 ---------------------------- */
                output2.innerHTML = `<p>I have something very important to ask you. My kid was with me and I seemed to have lost him. I look away for <span>${number1}</span> seconds to <span>${verb}</span>, and boom, gone. Here's a picture. He's very <span>${adj2}</span>.</p>`
    
            });

            /* --------- "wait a minute" button on output page 2 ---------------------------- */
            document.querySelector('#gotooutput3').addEventListener('click', function(event) {
                event.preventDefault();

                /* --------- grabbing values for output page 3 ---------------------------- */
                const exclaimation = document.querySelector('#exclaimation').value;
                const number2 = document.querySelector('#number2').value;
                const pluralnoun = document.querySelector('#pluralnoun').value;

                /* --------- switching sections ---------------------------- */
                sections[5].className = "hidden";
                sections[6].className = "hidden";
                sections[7].className = "output3";
                sections[8].className = null;

                /* --------- changing header html ---------------------------- */
                header.innerHTML = "<h1>hooray!<h1>";
                header.style.textAlign = "center";

                /* --------- madlibs output 3 ---------------------------- */
                output3.innerHTML = `<p><span>${exclaimation}</span> - you've found him! In your other pocket I see. Thank you so much for your help, we will be out of your hair before you can count <span>${number2}</span> <span>${pluralnoun}</span>.</p>`
                
            });
 
            /* --------- "play again" button on output page 3 ---------------------------- */
            document.querySelector('#playagain').addEventListener('click', function(event){
                event.preventDefault();
                reset();
            });

        }

        /* --------- function for reseting if player clicks 'play again' ---------------------------- */
        function reset() {

            /* --------- hide all sections except 0 & 1 ---------------------------- */
            for (const eachSection of sections){
                eachSection.className = "hidden"
            }

            sections[0].className = '';
            sections[1].className = "madlib-input";

            header.innerHTML = `<h1>What's in Your Pocket?</h1>
            <h2>Fill out the form to find out.</h2>`;

            header.style.paddingBottom = '';
            header.style.textAlign = '';

            const textFields = document.querySelectorAll('input[type=text]');
            for (let i=0; i<textFields.length; i++) {
                textFields[i].value = '';
            }

            output1.innerHTML = '';
            output2.innerHTML = '';
            output3.innerHTML = '';

            error1.innerHTML = '';
            error2.innerHTML = '';
        }
    });

   


}());