(function(){
    'use strict';
    console.log('reading js');

    const html = document.querySelector('html');
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');
    const h1 = document.querySelector('h1');
    const avatarselection = document.querySelector('#avatarselection');
    const player1options = document.querySelector('#player1options');
    let clickCount1 = 0;
    let clickCount2 = 0;
    

    const gameData = {
        cards: [],
        players: ['player 1', 'player 2'],
        avatars: ['avatar1.png', 'avatar2.png', 'avatar3.png', 'avatar4.png'],
        score: [0,0],
        round: 0,
        draw1: 0,
        draw2: 0,
        drawSum: 0,
        index: 0,
        gameEnd:190 
    };
    
    document.querySelector('#gotoavatar').addEventListener ('click', function(event){
        event.preventDefault();
        sections[0].className = 'hidden';
        sections[1].className = 'show';
        header.style.display = 'none';
        avatarselection.style.display = "grid";
    });

    let currentAvatar = 0;
    const options = document.querySelector('#player1options');

    document.querySelector('.next').addEventListener('click', nextAvatar);
    document.querySelector('.previous').addEventListener('click', previousAvatar);

    function nextAvatar(){
        currentAvatar++;
        if(currentAvatar > gameData.avatars.legnth-1){
            currentAvatar=0;
        }
        options.innerHTML = `<img src="images/${gameData.avatars[currentAvatar]}">`;
        document.querySelector('#arrow1').style.visibility = 'visible';
    };

    function previousAvatar(){
        currentAvatar--;
        if (currentAvatar < 0) {
            currentAvatar = gameData.avatars.length -1;
        }
        options.innerHTML = `<img src="images/${gameData.avatars[currentAvatar]}">`;
    }
    

    document.querySelector('#startbutton').addEventListener('click', function(){
        sections[1].className = 'hidden';
        sections[2].className = 'show';
        header.innerHTML = `<h1>Round ${gameData.round[1]}</h1>`;
        h1.style.fontSize = '65px';
        h1.style.color = "#e0d5b1";
        html.style.backgroundImage = 'url(images/game-background.jpg)';
    });


    const shuffleButton = document.querySelector('#shuffle');
    const cards = document.querySelectorAll('.card');
    const cardContainer = document.getElementById('cardContainer');

    shuffleButton.addEventListener('click', function(){
        const deck = document.querySelector('#deck');
        deck.classList.add('shuffling');
        
    })



})();