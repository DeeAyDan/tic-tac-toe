let gameControl = (function(){
    const player2Panel = document.querySelector('#player2-panel');
    const aiPanel = document.querySelector('#ai-panel');
    player2Panel.classList.add('active');
    aiPanel.classList.add('inactive');
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
    const resetButton = document.querySelector('#reset-button');
    const startButton = document.querySelector('#start-button');

    player1SelectX.addEventListener('click', playerX);
    player1SelectO.addEventListener('click', playerO);
    renamePlayer1.addEventListener('click', player1Rename);
    renamePlayer2.addEventListener('click', player2Rename);
    player2Panel.addEventListener('click', selectPlayer2);
    aiPanel.addEventListener('click', selectAI);

    function playerX() {
        player1SelectO.setAttribute('style', 'opacity: 20%;');
        player1SelectX.setAttribute('style', 'opacity: 100%;box-shadow: 0 0 10px 5px #0a1931;');
        player1SelectX.classList.add('active');
        player1SelectO.classList.remove('active');
        if (player2Panel.classList.contains('inactive')){
            aiSelectX.setAttribute('style', 'opacity: 20%;');
            aiSelectO.setAttribute('style', 'opacity: 100%;box-shadow: 0 0 10px 5px #0a1931;');
        }
        else if (aiPanel.classList.contains('inactive')){
            player2SelectX.setAttribute('style', 'opacity: 20%;');
            player2SelectO.setAttribute('style', 'opacity: 100%;box-shadow: 0 0 10px 5px #0a1931;');
        }
    };
    function playerO() {
        player1SelectX.setAttribute('style', 'opacity: 20%;');
        player1SelectO.setAttribute('style', 'opacity: 100%;box-shadow: 0 0 10px 5px #0a1931;');
        player1SelectO.classList.add('active');
        player1SelectX.classList.remove('active');
        if (player2Panel.classList.contains('inactive')){
            aiSelectO.setAttribute('style', 'opacity: 20%;');
            aiSelectX.setAttribute('style', 'opacity: 100%;box-shadow: 0 0 10px 5px #0a1931;');
        }
        else if (aiPanel.classList.contains('inactive')){
            player2SelectO.setAttribute('style', 'opacity: 20%;');
            player2SelectX.setAttribute('style', 'opacity: 100%;box-shadow: 0 0 10px 5px #0a1931;');
        }
    };
    function player1Rename() {
        namePlayer1.textContent = prompt(`Rename player 1:`, '');
    };
    function player2Rename() {
        if(player2Panel.classList.contains('active')){
        namePlayer2.textContent = prompt(`Rename player 1:`, '');
        }
    };
    function selectPlayer2() {
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
    };
    function selectAI() {
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
    };


    return {
        
    }

})();



