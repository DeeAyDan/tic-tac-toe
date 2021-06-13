let gameControl = (function(){
    const player1Panel = document.querySelector('#player1-panel');
    const player2Panel = document.querySelector('#player2-panel');
    const aiPanel = document.querySelector('#ai-panel');
    player1Panel.classList.add('active');
    player2Panel.classList.add('active');
    const namePlayer1 = document.querySelector('#player1-name');
    const namePlayer2 = document.querySelector('#player2-name');
    const nameAI = document.querySelector('#ai-name');
    const renamePlayer1 = document.querySelector('#player1-button');
    const renamePlayer2 = document.querySelector('#player2-button');
    const player1SelectX = document.querySelector('#player1-x');
    const player1SelectO = document.querySelector('#player1-o');
    const player2SelectX = document.querySelector('#player2-x');
    const player2SelectO = document.querySelector('#player2-o');
    const aiSelectX = document.querySelector('#ai-x');
    const aiSelectO = document.querySelector('#ai-o');
    const unbeatableButton = document.querySelector('#ai-button');
    const resetButton = document.querySelector('#reset-button');
    const startButton = document.querySelector('#start-button');
    const outcomeMessage = document.querySelector('p');
    const table = document.querySelector('#table');
    const cells = document.querySelectorAll('.table-cell');
    let player1Sign = '';
    let player2Sign = '';
    let aiSign = '';
    let board = ['', '', '', '', '', '', '', '', ''];
    let player1Turn = true;
    let roundsPlayer = 0;

    player1SelectX.addEventListener('click', playerX);
    player1SelectO.addEventListener('click', playerO);
    renamePlayer1.addEventListener('click', player1Rename);
    renamePlayer2.addEventListener('click', player2Rename);
    player2Panel.addEventListener('click', selectPlayer2);
    aiPanel.addEventListener('click', selectAI);
    resetButton.addEventListener('click', resetGame);
    startButton.addEventListener('click', startGame);


    cells.forEach(div => {
        div.addEventListener('click', playRound);
        function playRound(){
            if (table.classList.contains('active')){
                if(player1Turn){
                    if(!div.classList.contains('used')){
                        const image = document.createElement('img');
                        image.setAttribute('src', `imgs/${player1Sign}.png`);
                        image.setAttribute('style', `width:99px;height:99px;`);
                        outcomeMessage.textContent = `It's ${namePlayer2.textContent}'s turn.`
                        div.appendChild(image);
                        div.classList.add('used');
                        player1Turn = false;
                        board[div.id] = player1Sign;
                        winCheck();
                    }
                }
                else if(!player1Turn){
                    const image = document.createElement('img');
                    image.setAttribute('src', `imgs/${player2Sign}.png`);
                    image.setAttribute('style', `width:99px;height:99px;`);
                    outcomeMessage.textContent = `It's ${namePlayer1.textContent}'s turn.`
                    div.appendChild(image);
                    div.classList.add('used');
                    player1Turn = true;
                    board[div.id] = player2Sign;
                    winCheck();
                }
            }
            
        }
    });
    // Player 1 X active
    function playerX() {
        if (player1Panel.classList.contains('active')){
            player1SelectO.setAttribute('style', 'opacity: 20%;');
            player1SelectX.setAttribute('style', 'opacity: 100%;box-shadow: 0 0 10px 5px #0a1931;');
            player1SelectX.classList.add('active');
            player1SelectO.classList.remove('active');
            player1Turn = true;
            if (player2Panel.classList.contains('active')){
                player2SelectX.setAttribute('style', 'opacity: 20%;');
                player2SelectO.setAttribute('style', 'opacity: 100%;box-shadow: 0 0 10px 5px #0a1931;');
                player2SelectO.classList.add('active');
                player2SelectX.classList.remove('active');
            }
            else if (aiPanel.classList.contains('active')){
                aiSelectX.setAttribute('style', 'opacity: 20%;');
                aiSelectO.setAttribute('style', 'opacity: 100%;box-shadow: 0 0 10px 5px #0a1931;');
            }
        }
    };
    // Player 1 O active
    function playerO() {
        if (player1Panel.classList.contains('active')){
            player1SelectX.setAttribute('style', 'opacity: 20%;');
            player1SelectO.setAttribute('style', 'opacity: 100%;box-shadow: 0 0 10px 5px #0a1931;');
            player1SelectO.classList.add('active');
            player1SelectX.classList.remove('active');
            player1Turn = false;
            if (player2Panel.classList.contains('active')){
                player2SelectO.setAttribute('style', 'opacity: 20%;');
                player2SelectX.setAttribute('style', 'opacity: 100%;box-shadow: 0 0 10px 5px #0a1931;');
                player2SelectX.classList.add('active');
                player2SelectO.classList.remove('active');
            }
            else if (aiPanel.classList.contains('active')){
                aiSelectO.setAttribute('style', 'opacity: 20%;');
                aiSelectX.setAttribute('style', 'opacity: 100%;box-shadow: 0 0 10px 5px #0a1931;');
                aiSelectX.classList.add('active');
                aiSelectO.classList.remove('active');
            }
        }
    };
    function player1Rename() {
        if (player1Panel.classList.contains('active')){
            namePlayer1.textContent = prompt(`Rename player 1:`, '');
        }
    };
    function player2Rename() {
        if(player2Panel.classList.contains('active') && player1Panel.classList.contains('active')){
        namePlayer2.textContent = prompt(`Rename player 1:`, '');
        }
    };
    function selectPlayer2() {
        if (player1Panel.classList.contains('active')){
            aiPanel.classList.add('inactive');
            player2Panel.classList.remove('inactive');
            aiPanel.classList.remove('active');
            player2Panel.classList.add('active');
            if (player1SelectO.classList.contains('active')){
                player2SelectO.setAttribute('style', 'opacity: 20%;');
                player2SelectX.setAttribute('style', 'opacity: 100%;box-shadow: 0 0 10px 5px #0a1931;');
                aiSelectO.setAttribute('style', 'opacity: 20%;');
                aiSelectX.setAttribute('style', 'opacity: 20%;');
            }
            else if (player1SelectX.classList.contains('active')){
                player2SelectX.setAttribute('style', 'opacity: 20%;');
                player2SelectO.setAttribute('style', 'opacity: 100%;box-shadow: 0 0 10px 5px #0a1931;');
                aiSelectO.setAttribute('style', 'opacity: 20%;');
                aiSelectX.setAttribute('style', 'opacity: 20%;');
            }
        }
    };
    function selectAI() {
        if (player1Panel.classList.contains('active')){
            aiPanel.classList.remove('inactive');
            player2Panel.classList.add('inactive');
            aiPanel.classList.add('active');
            player2Panel.classList.remove('active');
            if (player1SelectO.classList.contains('active')){
                aiSelectO.setAttribute('style', 'opacity: 20%;');
                aiSelectX.setAttribute('style', 'opacity: 100%;box-shadow: 0 0 10px 5px #0a1931;');
                player2SelectO.setAttribute('style', 'opacity: 20%;');
                player2SelectX.setAttribute('style', 'opacity: 20%;');
            }
            else if (player1SelectX.classList.contains('active')){
                aiSelectX.setAttribute('style', 'opacity: 20%;');
                aiSelectO.setAttribute('style', 'opacity: 100%;box-shadow: 0 0 10px 5px #0a1931;');
                player2SelectO.setAttribute('style', 'opacity: 20%;');
                player2SelectX.setAttribute('style', 'opacity: 20%;');
            }  
        }

    };
    function startGame(){
        if (!player1SelectO.classList.contains('active') && !player1SelectX.classList.contains('active')){
            alert('You must select X or O!')
            return;
        }
        if (player1Turn){
            player1Panel.classList.remove('active');
            table.classList.add('active');
            outcomeMessage.textContent = `The game has been started.\nIt's ${namePlayer1.textContent}'s turn.`;
            player1Sign = 'x';
            player2Sign = 'o';
            aiSign = 'o';
        }
        else if (player2Panel.classList.contains('active') && !player1Turn){
            player1Panel.classList.remove('active');
            table.classList.add('active');
            outcomeMessage.textContent = `The game has been started.\nIt's ${namePlayer2.textContent}'s turn.`;
            player1Sign = 'o';
            player2Sign = 'x';
            aiSign = 'x';
        }
        else if (aiPanel.classList.contains('active')){
            player1Panel.classList.remove('active');
            table.classList.add('active');
            outcomeMessage.textContent = `The game has been started.\nIt's the AI's turn.`;
            aiRound();
            player1Sign = 'o';
            player2Sign = 'x';
            aiSign = 'x';
        }
    };
    function resetGame(){
        roundsPlayer = 0;
        player1Panel.classList.add('active');
        outcomeMessage.textContent = `The game has been reset.`;
        table.classList.remove('active');
        player1SelectO.classList.remove('active');
        player1SelectX.classList.remove('active');
        player1SelectX.setAttribute('style', 'opacity: 100%;');
        player1SelectO.setAttribute('style', 'opacity: 100%;');
        player2SelectX.setAttribute('style', 'opacity: 100%;');
        player2SelectO.setAttribute('style', 'opacity: 100%;');
        aiSelectX.setAttribute('style', 'opacity: 100%;');
        aiSelectO.setAttribute('style', 'opacity: 100%;');
        board = ['', '', '', '', '', '', '', '', ''];
        cells.forEach(div => {
            div.innerHTML = '';
            div.classList.remove('used');
            console.log(div.id);
        })
    };
    function aiRound(){

    }
    function winCheck(){
        roundsPlayer++;
        if (board[0] === player1Sign && board[1] === player1Sign && board[2] === player1Sign || board[3] === player1Sign && board[4] === player1Sign && board[5] === player1Sign || board[6] === player1Sign && board[7] === player1Sign && board[8] === player1Sign){
            outcomeMessage.textContent = `Game over. ${namePlayer1.textContent} won.`
            table.classList.remove('active');
            return
        }
        else if(board[0] === player1Sign && board[3] === player1Sign && board[6] === player1Sign || board[1] === player1Sign && board[4] === player1Sign && board[7] === player1Sign || board[2] === player1Sign && board[5] === player1Sign && board[8] === player1Sign){
            outcomeMessage.textContent = `Game over. ${namePlayer1.textContent} won.`
            table.classList.remove('active');
            return
        }
        else if(board[0] === player1Sign && board[4] === player1Sign && board[8] === player1Sign || board[2] === player1Sign && board[4] === player1Sign && board[6] === player1Sign){
            outcomeMessage.textContent = `Game over. ${namePlayer1.textContent} won.`
            table.classList.remove('active');
            return
        }
        else if (board[0] === player2Sign && board[1] === player2Sign && board[2] === player2Sign || board[3] === player2Sign && board[4] === player2Sign && board[5] === player2Sign || board[6] === player2Sign && board[7] === player2Sign && board[8] === player2Sign){
            outcomeMessage.textContent = `Game over. ${namePlayer2.textContent} won.`
            table.classList.remove('active');
            return
        }
        else if(board[0] === player2Sign && board[3] === player2Sign && board[6] === player2Sign || board[1] === player2Sign && board[4] === player2Sign && board[7] === player2Sign || board[2] === player2Sign && board[5] === player2Sign && board[8] === player2Sign){
            outcomeMessage.textContent = `Game over. ${namePlayer2.textContent} won.`
            table.classList.remove('active');
            return
        }
        else if(board[0] === player2Sign && board[4] === player2Sign && board[8] === player2Sign || board[2] === player2Sign && board[4] === player2Sign && board[6] === player2Sign){
            outcomeMessage.textContent = `Game over. ${namePlayer2.textContent} won.`
            table.classList.remove('active');
            return
        }
        else if (roundsPlayer === 9){
            outcomeMessage.textContent = `It's a tie.`
            table.classList.remove('active');
            return
        }
    }
})();

