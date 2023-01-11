// Physical Gameboard Module
const Gameboard = (() => {
    const gameboard = ["X", "O", "X", "O"];

    const board = document.querySelector(".main");
    const renderGameboard = () => {
        
    };

    const printArray = () => {
        gameboard.forEach((i) => {
            board.append(i);
        })
    }

    const tiles = (()=>{
        const grid = document.querySelectorAll(".button")
        let currentPlayer = true;
        
        grid.forEach((tile)=>{
            tile.addEventListener("click", ()=>{
                if ((currentPlayer === true) && (tile.innerHTML == "")) {
                    tile.innerHTML= (gameControl.player1.symbol);
                    currentPlayer = false;
                }

                else if ((currentPlayer === false) && (tile.innerHTML == "")){
                    tile.innerHTML = (gameControl.player2.symbol);
                    currentPlayer = true;
                }
                
            })
         
        })
    })();


    return {
        gameboard,
        renderGameboard,
        printArray,
    }

})();

Gameboard.printArray();


// Factory Function for Players
const Player = (symbol) => {
    
    return {symbol};
};

// Module - To Control Game
const gameControl = (() => {
    let player1 =  Player("X");
    let player2 = Player("O");



    return {
        player1,
        player2
    }
})();



