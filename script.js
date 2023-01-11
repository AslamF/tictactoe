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
    return {
        gameboard,
        renderGameboard,
        printArray
        
    }

})();

Gameboard.printArray();

// Factory Function for Players
const Player = (name, symbol) => {

};

// Module - To Control Game
const gameControl = (() => {

})();

