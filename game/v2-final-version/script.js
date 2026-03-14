(function(){
    'use strict';
    console.log('reading js');

    // ------- general consts ---------
    const body = document.querySelector('body');
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');
    const h1 = document.querySelector('h1');

    // ------- avatar consts ---------
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
    const flipButton = document.querySelector('#flip');

    // ------------ back of the cards -----------
    const playCard1 = document.querySelector('#playcard1');
    const playCard2 = document.querySelector('#playcard2');
    const playCard1WarA = document.querySelector('#playCard1War-A');
    const playCard2WarA = document.querySelector('#playCard2War-A');
    const playCard1WarB = document.querySelector('#playCard1War-B');
    const playCard2WarB = document.querySelector('#playCard2War-B');
    const winnerP1 = document.querySelector('#winner-p1');
    const winnerP2 = document.querySelector('#winner-p2');

    //  ----------- front of the cards ----------
    const front1 = document.querySelector('#front1');
    const front2 = document.querySelector('#front2');
    const front1A = document.querySelector('#front1A');
    const front2A = document.querySelector('#front2A');
    const front1B = document.querySelector('#front1B');
    const front2B = document.querySelector('#front2B');

    // ---------- updating score and round info ------------
    const roundCount = document.querySelector('#round-count');
    const updateRoundWin = document.querySelector('#update-roundwin');
    const score1 = document.querySelector('#score1');
    const score2 = document.querySelector('#score2');

    // ----------- treasure updates --------------
    let p1Milestones = [];
    let p2Milestones = [];

    const milestones = [20, 40, 60, 80];

    // ------------ sounds -----------
    const shuffleSound = new Audio('audio/shuffle.mp3');
    const cardSound = new Audio('audio/card.mp3');
    const warBell = new Audio('audio/warbell.mp3');
    const backgroundMusic = new Audio('audio/background-music.mp3');
    const audioControl = document.querySelector('#audiocontrol');
    const audio = document.querySelector('#audio');


    

    // ------------- all game data -----------
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
        player1Avatar: null,
        player2Avatar: null,
        round: 0,
        draw1: 0,
        draw2: 0,
        drawSum: 0,
        index: 0,
        war: false,
        warPile: [] 
    };

    winnerP1.addEventListener('click', function(){
        resolveDoubleWar(1);
    });

    winnerP2.addEventListener('click', function(){
        resolveDoubleWar(2);
    });

    document.querySelector('#giveup1').addEventListener('click', function(){
        giveUp(1);
    });
    
    document.querySelector('#giveup2').addEventListener('click', function(){
        giveUp(2);
    });
    
    // ------------- switching from start screen to avatar selection screen --------------
    document.querySelector('#gotoavatar').addEventListener ('click', function(event){
        event.preventDefault();
        sections[0].className = 'hidden';
        sections[1].className = 'show';
        document.querySelector('#avatarpage').style.display = 'flex';
        header.style.display = 'none';
        avatarselection.style.display = "grid";
    });

    

    // ------------- choosing avatars ----------------------------
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
        options1.innerHTML = `<img src="images/${gameData.avatars[currentAvatar1]}" width="250">`;
        document.querySelector('#arrow1').style.visibility = 'visible';
    };

    function previousAvatar1(){
        currentAvatar1--;
        if (currentAvatar1 < 0) {
            currentAvatar1 = gameData.avatars.length -1;
        }
        options1.innerHTML = `<img src="images/${gameData.avatars[currentAvatar1]}" width="250">`;
    }

    function nextAvatar2(){
        currentAvatar2++;
        if(currentAvatar2 > gameData.avatars.length-1){
            currentAvatar2=0;
        }
        options2.innerHTML = `<img src="images/${gameData.avatars[currentAvatar2]}" width="250">`;
        document.querySelector('#arrow3').style.visibility = 'visible';
    };

    function previousAvatar2(){
        currentAvatar2--;
        if (currentAvatar2 < 0) {
            currentAvatar2 = gameData.avatars.length -1;
        }
        options2.innerHTML = `<img src="images/${gameData.avatars[currentAvatar2]}" width="250">`;
    };
    


    // ------------- switching from avatar selection to gameplay screen --------------
    document.querySelector('#startbutton').addEventListener('click', function(){
        
        if(player1Selected && player2Selected) {
            gameData.player1Avatar = gameData.avatars[currentAvatar1];
            gameData.player2Avatar = gameData.avatars[currentAvatar2];

            backgroundMusic.play();
            backgroundMusic.loop = true;
            playPause();

            sections[1].className = 'hidden';
            sections[2].className = 'show';
            document.querySelector('#avatarpage').style.display = 'none';
            document.querySelector('footer').className = '';
            header.innerHTML = `<h1>Round ${gameData.round} / 13</h1>`;
            h1.style.fontSize = '65px';
            h1.style.color = "#e0d5b1";
            body.style.backgroundImage = 'url(images/game-background.jpg)';
        } else {
            alert('Arrrrr, please choose a character for both players.');
        }
    });


    
    // ------------- triggering shuffle animation ------------------------
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

    shuffleButton.addEventListener('mouseup', function(){
        shuffleSound.play();
    })

    // ------------- splitting the deck 13 & 13 ---------------
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
    flipButton.addEventListener('click', function(){
        cardSound.play();
        flipButton.disabled = true;

        if(gameData.war) {
            handleWar();
        } else {
            moveCards();
        }
    })
    
    // ------------- moving cards to the center of the screen ------------
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
        }, 500);
    }

    // ------------- resetting the playcards to original location --------------
    function resetCards(){
        playCard1.className = 'moveBack1';
        playCard2.className = 'moveBack2';
        updateRoundWin.innerHTML = '';
        updateRoundWin.style.left = '440px;'
    };

    
    // ------------- flipping the cards to reveal face card --------------
    function flipCards(){
        roundCount.innerHTML = `Round ${gameData.round} / 13`;

        console.log("Top card P1:", gameData.player1Deck[0]); 
        console.log("Top card P2:", gameData.player2Deck[0]);
        
        const card1 = gameData.player1Deck.shift();
        const card2 = gameData.player2Deck.shift();

        updateDeckVisibility();

        front1.innerHTML = `<img src="images/${card1.img}">`;
        front2.innerHTML = `<img src="images/${card2.img}">`;
        
        front1.classList.add('flipFront');
        front2.classList.add('flipFront');

        // gameData.warPile.push(card1, card2);

        gameData.drawSum = card1.value + card2.value;

        console.log('drawsum:',gameData.drawSum);
        console.log('p1 drawn card:', card1.value);
        console.log('p2 drawn card:', card2.value);

        setTimeout(function(){
            // if player 1's card is higher
            if (card1.value > card2.value) {
                console.log('Player 1 won this round with points!');
                setTimeout(function(){
                    moveCards1();
                }, 1500);

                gameData.score[0] += gameData.drawSum;
                checkTreasure(1);
                updateRoundWin.innerHTML = '<p>Player 1 drew the higher card!</p>';
                score1.innerHTML = `Score: ${gameData.score[0]}`;

                checkGameEnd();
            }

            // if player 2's card is higher
            if (card1.value < card2.value) {
                console.log('Player 2 won this round with points!');
                setTimeout(function(){
                    moveCards2();
                }, 1500);

                gameData.score[1] += gameData.drawSum;
                checkTreasure(2);
                updateRoundWin.innerHTML = '<p>Player 2 drew the higher card!</p>';
                score2.innerHTML = `Score: ${gameData.score[1]}`;

                checkGameEnd();
            }

            // if the player's cards are equal
            if (card1.value === card2.value) {
                console.log('war!!!!');
                warBell.play();

                document.querySelector('#candleflame').classList.remove('hidden');

                gameData.warPile.push(card1, card2);

                if(gameData.player1Deck.length === 0 || gameData.player2Deck.length === 0){
                    console.log("War cannot continue. Ending game.");
                    checkGameEnd();
                    flipButton.style.display = "none";
                    return;
                }

                gameData.war = true;

                updateRoundWin.innerHTML = "<p>War! Flip again!</p>";
            }

            console.log("After round:");
            console.log("P1:", gameData.player1Deck.length);
            console.log("P2:", gameData.player2Deck.length);
        }, 1000);

        setTimeout(function(){
            flipButton.disabled = false;
        
        }, 2500);
        
    }

    // ------------- checking if players ran out of cards & who has the higher score --------------
    function checkGameEnd(){
        if(gameData.player1Deck.length === 0 && gameData.player2Deck.length === 0) {

            const winnerOverlay = document.querySelector('#winner');
            const winnerText = document.querySelector('#winner-content h2');
            const winnerPoints = document.querySelector('#winner-content p');
            const winnerAvatar = document.querySelector('#winner-avatar');

            if(gameData.score[0] > gameData.score[1]){
                winnerText.innerHTML = 'Player 1 wins!';
                winnerPoints.innerHTML = `With a score of ${gameData.score[0]}`;
                winnerAvatar.src = `images/${gameData.player1Avatar}`;
            } else if (gameData.score[1] > gameData.score[0]) {
                winnerText.innerHTML = 'Player 2 wins!';
                winnerPoints.innerHTML = `With a score of ${gameData.score[1]}`;
                winnerAvatar.src = `images/${gameData.player2Avatar}`;
            } else {
                updateRoundWin.innerHTML = "<p>It's a draw!</p>";
            }

            winnerOverlay.className = 'show';
            winnerOverlay.style.display = 'flex';
            flipButton.style.display = 'none';
        }
        
    }

    function giveUp(player){

        const overlay = document.querySelector('#winner');
        const winnerText = document.querySelector('#winner-content h2');
        const restartButton = document.querySelector('#restart-game');
        const winnerAvatar = document.querySelector('#winner-avatar');
        const winnerPoints = document.querySelector('#winner-content p');
    
        if(player === 1){
            winnerText.innerHTML = "Player 1 walked the plank!";
            winnerAvatar.src = `images/${gameData.player1Avatar}`;
            winnerPoints.innerHTML = '';
        } else {
            winnerText.innerHTML = "Player 2 walked the plank!";
            winnerAvatar.src = `images/${gameData.player2Avatar}`;
            winnerPoints.innerHTML = '';
        }
    
        overlay.className = 'show';
        overlay.style.display = 'flex';
    
        flipButton.disabled = true;
        flipButton.style.display = 'none';
    
        restartButton.style.display = 'block';
    }

    // ------------- refresh page --------------
    document.querySelector('#restart-game').addEventListener('click', function(){
        location.reload();
    })

    // ------------- moving cards to the left if player 1 won the round --------------
    function moveCards1(){
        console.log("moving cards to player 1");
        front1.classList.add('collect1');
        front2.classList.add('collect1');
        if(gameData.war) {
            front1A.classList.add('collect1');
            front2A.classList.add('collect1');
            front1B.classList.add('collect1');
            front2B.classList.add('collect1');
        };
    }

    // ------------- moving cards to the right if player 2 won the round --------------
    function moveCards2(){
        front1.classList.add('collect2');
        front2.classList.add('collect2');
        if (gameData.war) {
            front1A.classList.add('collect2');
            front2A.classList.add('collect2');
            front1B.classList.add('collect2');
            front2B.classList.add('collect2');
        };
    }

    // ------------- if war is triggered --------------
    function handleWar(){


        if(gameData.player1Deck.length < 2 && gameData.score[1] > gameData.score[0]) {
            checkGameEnd();
            flipButton.style.display = 'none';
            return;
        };

        if(gameData.player2Deck.length < 2 && gameData.score[0] > gameData.score[1]) {
            checkGameEnd();
            flipButton.style.display = 'none';
            return;
        };

        if(gameData.player1Deck.length < 2 || gameData.player2Deck.length < 2){
            console.log("Not enough cards for war. Ending game.");
            flipButton.style.display = 'none';
            checkGameEnd();
            return;
        }

        const down1 = gameData.player1Deck.shift();
        const down2 = gameData.player2Deck.shift();

        const up1 = gameData.player1Deck.shift();
        const up2 = gameData.player2Deck.shift();

        updateDeckVisibility();

        gameData.warPile.push(down1, down2, up1, up2);



        //class logic here
        setTimeout(function(){
            playCard1WarA.style.visibility = 'visible';
            playCard2WarA.style.visibility = 'visible';

            playCard1WarA.className = 'move1A';
            playCard2WarA.className = 'move2A';

            setTimeout(function(){
                playCard1WarB.style.visibility = 'visible';
                playCard2WarB.style.visibility = 'visible';

                playCard1WarB.className = 'move1B';
                playCard2WarB.className = 'move2B';

                setTimeout(function(){
                    
                    playCard1WarB.classList.add('backCardFlip1B');
                    playCard2WarB.classList.add('backCardFlip2B');

                    front1B.innerHTML = `<img src="images/${up1.img}">`;
                    front2B.innerHTML = `<img src="images/${up2.img}">`;

                    front1B.className = 'flipFront';
                    front2B.className = 'flipFront';

                    setTimeout(function(){
                        
                        playCard1WarA.classList.add('backCardFlip1A');
                        playCard2WarA.classList.add('backCardFlip2A');

                        front1A.innerHTML = `<img src="images/${down1.img}">`;
                        front2A.innerHTML = `<img src="images/${down2.img}">`;

                        front1A.className = 'flipFront';
                        front2A.className = 'flipFront';

                        setTimeout(function(){
                            resolveWar(up1, up2, down1, down2);
                        },3000)
                        
                    },500);
                },500);
            },1000);
        },500);

        
    }

    // ------------- adding the sum of cards to the player who won --------------
    function resolveWar(up1, up2, down1, down2) {
        let sum = 0;
        
        for (let i = 0; i < gameData.warPile.length; i++) {
             sum += gameData.warPile[i].value;
            
        }

        if (!up1 || !up2 || !down1 || !down2) {
            console.error("One of the war cards is undefined!");
            return;
        }

        if(up1.value > up2.value){
            moveCards1();
            gameData.score[0] += sum;
            updateRoundWin.innerHTML = "<p>Player 1 wins the war!</p>";
            checkTreasure(1);
            document.querySelector('#candleflame').classList.remove('hidden');
            
        } else if (up1.value < up2.value) {
            moveCards2();
            gameData.score[1] += sum;
            updateRoundWin.innerHTML = '<p>Player 2 wins the war!</p>';
            checkTreasure(2);
            document.querySelector('#candleflame').classList.remove('hidden');
            
        } else {
            document.querySelector('#double-war-overlay').className = 'show';
           
            return;
            
        }

        if (up1.value !== up2.value) {
            gameData.warPile = [];
            gameData.war = false;
        }

        score1.innerHTML = `Score: ${gameData.score[0]}`;
        score2.innerHTML = `Score: ${gameData.score[1]}`;

        flipButton.style.display = 'block';
        flipButton.disabled = false;

        checkGameEnd();
        
    }

    function resolveDoubleWar(winner) {
        if(winner === 1){
            gameData.score[0] += 100;
            updateRoundWin.innerHTML = '<p>Player 1 won the double war!</p>';
            moveCards1();
            checkTreasure(1);
        } else {
            gameData.score[1] += 100;
            moveCards2();
            updateRoundWin.innerHTML = '<p>Player 2 won the double war!</p>';
            checkTreasure(2);
        }
    
        gameData.warPile = [];
        gameData.war = false;
        document.querySelector('#double-war-overlay').className = 'hidden';
    
        score1.innerHTML = `Score: ${gameData.score[0]}`;
        score2.innerHTML = `Score: ${gameData.score[1]}`;

        if(gameData.player1Deck.length === 0 || gameData.player2Deck.length === 0){
            flipButton.style.display = 'none';
            checkGameEnd();
            return;
        }
    
        flipButton.disabled = false;
    }

    // ------------- if players play their last card, all cards disappear --------------
    function updateDeckVisibility(){

        if(gameData.player1Deck.length < 1){
            cards[0].style.visibility = "hidden";
            cards[1].style.visibility = "hidden";
            cards[2].style.visibility = "hidden";
            cards[6].style.visibility = "hidden";
        }
    
        if(gameData.player2Deck.length < 1){
            cards[3].style.visibility = "hidden";
            cards[4].style.visibility = "hidden";
            cards[5].style.visibility = "hidden";
            cards[7].style.visibility = "hidden";
        }
    
    }

    // ---------- checking for points milestones ------------
    function showTreasure(player, index) {
        
        const treasureId = `treasure${index + 1}${player === 1 ? 'a' : 'b'}`;
        const treasureEl = document.querySelector(`#${treasureId}`);
        if (treasureEl) {
            treasureEl.classList.remove('hidden'); // remove the hidden class
        }
    }

    function checkTreasure(player) {
        const score = gameData.score[player - 1];
    
        for (let i = 0; i < milestones.length; i++) {
            const milestoneIndex = i + 1; // For IDs
            const milestoneId = `#treasure${milestoneIndex}${player === 1 ? 'a' : 'b'}`;
            const treasureImg = document.querySelector(milestoneId);
    
            if (score >= milestones[i]) {
                if (player === 1 && p1Milestones.indexOf(i) === -1) {
                    if (treasureImg) treasureImg.classList.remove("hidden");
                    p1Milestones.push(i);
                } 
                if (player === 2 && p2Milestones.indexOf(i) === -1) {
                    if (treasureImg) treasureImg.classList.remove("hidden");
                    p2Milestones.push(i);
                }
            }
        }
    }

    // --------------- background music control ----------------
    function playPause(){
        audio.addEventListener('mousedown', function(){
            if(!backgroundMusic.paused){
                backgroundMusic.pause();
                audio.src='images/soundoff.png';
            } else {
                backgroundMusic.play();
                audio.src='images/soundon.png';
            }
        })
    }
    

    // ------------- checking which cards in are each array each game ------------
    console.log("P1 deck:", gameData.player1Deck.length);
    console.log("P2 deck:", gameData.player2Deck.length);
    console.log("war pile:", gameData.warPile);
    



})();