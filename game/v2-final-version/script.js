(function(){
    'use strict';
    console.log('reading js');

    const html = document.querySelector('html');
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');
    const h1 = document.querySelector('h1');

    const avatarselection = document.querySelector('#avatarselection');
    let currentAvatar1 = 0;
    let currentAvatar2 = 0;
    const options1 = document.querySelector('#player1options');
    const options2 = document.querySelector('#player2options');
    let player1Selected = false;
    let player2Selected = false;

    const shuffleButton = document.querySelector('#shuffle');
    const cards = document.querySelectorAll('.card');
    const deck = document.querySelector('#deck-container');

    const playCard1 = document.querySelector('#playcard1');
    const playCard2 = document.querySelector('#playcard2');
    const front1 = document.querySelector('#front1');
    const front2 = document.querySelector('#front2');

    const roundCount = document.querySelector('#round-count');
    const updateRoundWin = document.querySelector('#update-roundwin');
    const score1 = document.querySelector('#score1');
    const score2 = document.querySelector('#score2');

    const gameData = {
        cards: [
                {img:'2black.png', value:2}, {img:'2red.png',value:2},
                {img:'3black.png', value:3}, {img:'3red.png',value:3},
                {img:'4black.png', value:4}, {img:'4red.png',value:4},
                {img:'5black.png', value:5}, {img:'5red.png',value:5},
                {img:'6black.png', value:6}, {img:'6red.png',value:6},
                {img:'7black.png', value:7}, {img:'7red.png',value:7},
                {img:'8black.png', value:8}, {img:'8red.png',value:8},
                {img:'9black.png', value:9}, {img:'9red.png',value:9},
                {img:'10black.png', value:10}, {img:'10red.png',value:10},
                {img:'11black.png', value:11}, {img:'11red.png',value:11},
                {img:'Jblack.png', value:10}, {img:'Jred.png',value:10},
                {img:'Qblack.png', value:10}, {img:'Qred.png',value:10},
                {img:'Kblack.png', value:10}, {img:'Kred.png',value:10},
        ],
        players: ['player 1', 'player 2'],
        avatars: ['avatar1.png', 'avatar2.png', 'avatar3.png', 'avatar4.png'],
        score: [0,0],
        player1Deck: [],
        player2Deck: [],
        round: 0,
        draw1: 0,
        draw2: 0,
        drawSum: 0,
        index: 0,
        gameEnd:190 
    };

    const card1 = gameData.player1Deck.shift();
    const card2 = gameData.player2Deck.shift();
    
    // ------------- switching from start screen to avatar selection screen --------------
    document.querySelector('#gotoavatar').addEventListener ('click', function(event){
        event.preventDefault();
        sections[0].className = 'hidden';
        sections[1].className = 'show';
        header.style.display = 'none';
        avatarselection.style.display = "grid";
    });

    

    // ------------- choosing avatars --------------
    document.querySelector('#arrow2').addEventListener('click', function(){
        nextAvatar1();
        player1Selected = true;
    });
    document.querySelector('#arrow1').addEventListener('click', previousAvatar1);

    document.querySelector('#arrow4').addEventListener('click', function(){
        nextAvatar2();
        player2Selected = true;
    });
    document.querySelector('#arrow3').addEventListener('click', previousAvatar2);

    function nextAvatar1(){
        currentAvatar1++;
        if(currentAvatar1 > gameData.avatars.length-1){
            currentAvatar1=0;
        }
        options1.innerHTML = `<img src="images/${gameData.avatars[currentAvatar1]}">`;
        document.querySelector('#arrow1').style.visibility = 'visible';
    };

    function previousAvatar1(){
        currentAvatar1--;
        if (currentAvatar1 < 0) {
            currentAvatar1 = gameData.avatars.length -1;
        }
        options1.innerHTML = `<img src="images/${gameData.avatars[currentAvatar1]}">`;
    }

    function nextAvatar2(){
        currentAvatar2++;
        if(currentAvatar2 > gameData.avatars.length-1){
            currentAvatar2=0;
        }
        options2.innerHTML = `<img src="images/${gameData.avatars[currentAvatar2]}">`;
        document.querySelector('#arrow3').style.visibility = 'visible';
    };

    function previousAvatar2(){
        currentAvatar2--;
        if (currentAvatar2 < 0) {
            currentAvatar2 = gameData.avatars.length -1;
        }
        options2.innerHTML = `<img src="images/${gameData.avatars[currentAvatar2]}">`;
    };
    

    // ------------- switching from avatar selection to gameplay screen --------------
    document.querySelector('#startbutton').addEventListener('click', function(){
        
        if(player1Selected && player2Selected) {
            sections[1].className = 'hidden';
            sections[2].className = 'show';
            header.innerHTML = `<h1>Round ${gameData.round[1]}</h1>`;
            h1.style.fontSize = '65px';
            h1.style.color = "#e0d5b1";
            html.style.backgroundImage = 'url(images/game-background.jpg)';
        } else {
            // alert('Arrrrr, please choose a character for both players.');
        }
        
        
    });


    
    // ------------- triggering shuffle animation --------------
    shuffleButton.addEventListener('click', function(){
        deck.classList.add('shuffling');

        setTimeout(function(){
            deck.classList.remove('shuffling');
            setupDecks();
            dealCards();
            shuffleButton.style.display = 'none';
            setTimeout(function(){
                sections[3].className = 'show';
            }, 1000);
        }, 800);

    });

    function shuffleDeck(deck){
        for(let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
    }

    function setupDecks(){
        const shuffled = shuffleDeck([...gameData.cards]);

        gameData.player1Deck = shuffled.slice(0,13);
        gameData.player2Deck = shuffled.slice(13,26);

        console.log('p1 deck:', gameData.player1Deck);
        console.log('p2 deck:', gameData.player2Deck);
    }

    // ------------- sending cards to each side of screen for players --------------
    function dealCards(){
        // Player 1 (left side)
        setTimeout(function(){
            cards[0].style.transform = "translate(-420px, 230px)";
        }, 0);

        setTimeout(function(){
            cards[1].style.transform = "translate(-420px, 230px)";
        }, 200);

        setTimeout(function(){
            cards[2].style.transform = "translate(-420px, 230px)";
        }, 400);

        setTimeout(function(){
            cards[6].style.transform = "translate(-420px, 230px)";
        }, 600);

        // Player 2 (right side)
        setTimeout(function(){
            cards[3].style.transform = "translate(420px, 230px)";
        }, 0);

        setTimeout(function(){
            cards[4].style.transform = "translate(420px, 230px)";
        }, 200);

        setTimeout(function(){
            cards[5].style.transform = "translate(420px, 230px)";
        }, 400);

        setTimeout(function(){
            cards[7].style.transform = "translate(420px, 230px)";
        }, 600);
        
    };


    // --------------- when clicking flip, moveCards --> flipCards triggers ---------------
    document.querySelector('#flip').addEventListener('click', moveCards);
    
    function moveCards(){
        resetCards();
        gameData.round++;

        setTimeout(function(){
            playCard1.style.visibility = 'visible';
            playCard2.style.visibility = 'visible';

            playCard1.className = 'move1';
            playCard2.className = 'move2';

            front1.classList.remove('flipFront','collect1','collect2');
            front2.classList.remove('flipFront','collect1','collect2');

            flipCards();
        }, 1000);
    }

    function resetCards(){
        playCard1.className = 'moveBack1';
        playCard2.className = 'moveBack2';
        updateRoundWin.innerHTML = '';
    };

    

    function flipCards(){
        roundCount.innerHTML = `Round ${gameData.round}`;
        
        const card1 = gameData.player1Deck.shift();
        const card2 = gameData.player2Deck.shift();
        
        // gameData.draw1 = Math.floor(Math.random() * gameData.cards.length);
        // gameData.draw2 = Math.floor(Math.random() * gameData.cards.length);

        front1.innerHTML = `<img src="images/${card1.img}">`;
        front2.innerHTML = `<img src="images/${card2.img}">`;
        // front1.innerHTML = `<img src="images/${gameData.cards[gameData.draw1].img}">`;
        // front2.innerHTML = `<img src="images/${gameData.cards[gameData.draw2].img}">`;

        front1.classList.add('flipFront');
        front2.classList.add('flipFront');

        gameData.drawSum = card1.value + card2.value;
        // gameData.drawSum = gameData.cards[gameData.draw1].value + gameData.cards[gameData.draw2].value;


        console.log('drawsum:',gameData.drawSum);
        console.log('p1 card value:', card1.value);
        console.log('p2 card value:', card2.value);

        // console.log("After draw:");
        // console.log("P1:", gameData.player1Deck.length);
        // console.log("P2:", gameData.player2Deck.length);

        setTimeout(function(){
            // if player 1's card is higher
            if (card1.value > card2.value) {
                console.log('player 1 won this round with points!');
                setTimeout(function(){
                    moveCards1();
                }, 1500);

                gameData.score[0] += gameData.drawSum;
                updateRoundWin.innerHTML = 'Player 1 drew the higher card!';
                score1.innerHTML = `Score: ${gameData.score[0]}`;

                gameData.player1Deck.push(card1);
                gameData.player1Deck.push(card2);

                checkGameEnd();
            }

            // if player 2's card is higher
            if (card1.value < card2.value) {
                console.log('player 2 won this round with points!');
                setTimeout(function(){
                    moveCards2();
                }, 1500);

                gameData.score[1] += gameData.drawSum;
                updateRoundWin.innerHTML = 'Player 2 drew the higher card!';
                score2.innerHTML = `Score: ${gameData.score[1]}`;

                gameData.player2Deck.push(card1);
                gameData.player2Deck.push(card2);

                checkGameEnd();
            }

            // if the player's cards are equal
            if (card1.value === card2.value) {
                console.log('war!!!!');
                updateRoundWin.innerHTML = "War! Click 'Flip Cards' again!";
            }

            console.log("After round:");
            console.log("P1:", gameData.player1Deck.length);
            console.log("P2:", gameData.player2Deck.length);
        }, 1000);
        
    }

    function checkGameEnd(){
        if(gameData.player1Deck.length === 0){
            updateRoundWin.innerHTML = "Player 2 wins the game!";
            document.querySelector('#flip').style.display = 'none';
        };

        if(gameData.player2Deck.length === 0){
            updateRoundWin.innerHTML = "Player 1 wins the game!";
            document.querySelector('#flip').style.display = 'none';
        }
    }

    function moveCards1(){
        console.log("moving cards to player 1");
        front1.classList.add('collect1');
        front2.classList.add('collect1');
    }

    function moveCards2(){
        console.log("moving cards to player 2");
        front1.classList.add('collect2');
        front2.classList.add('collect2');
    }

    console.log("P1 deck:", gameData.player1Deck.length);
    console.log("P2 deck:", gameData.player2Deck.length);
    



})();