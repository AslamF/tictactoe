// Physical Gameboard Module
let gameStart = true;
let submit = document.querySelector("#submit");
let wrapper = document.querySelector(".wrapper");
let form = document.querySelector(".form");
let board = document.querySelector(".gameBoard");
let mainbox = document.querySelector(".mainBox");



const Gameboard = (() => {
    // ARRAY OF GAMEBOARD
    const gameboard = [
       "",
       "",
       "",
       "",
       "",
       "",
       "",
       "",
       ""
    ];

    return {
        gameboard,
        
    }

})();


// Factory Function for Players
const Player = (symbol, name) => {
    name =  document.querySelector("#player1").value;
    return {
        symbol,
        name 
    };
};





// Module - To Control Game

const gameControl = (() => {
    let player1 =  Player("X");
    let player2 = Player("O");
    
    return {
        player1,
        player2,
        
        
    }
})();

//FUNCTION TO PLAY GAME
const tiles = (() => {
    const grid = document.querySelectorAll(".button");
    const playerTurn = document.querySelector(".playerTurn");
    const btnsArr = Array.from(grid);
    
    let currentPlayer = true;
    
    for (let i = 0; i < btnsArr.length; i++){
        btnsArr[i].addEventListener("click", ()=>{    
        if (gameStart === true){
            if((currentPlayer === true) &&  (Gameboard.gameboard[i] === "")){
               // playerTurn.textContent = `IT IS PLAYER 2 TURN`
                Gameboard.gameboard[i] = gameControl.player1.symbol;
                btnsArr[i].classList.add("totodile");
                btnsArr[i].textContent = Gameboard.gameboard[i];
               
                wonGame();
                currentPlayer = false;
            }
            else if((currentPlayer === false) && (Gameboard.gameboard[i] === "")){
                //playerTurn.textContent = `It is PLAYER 1 TURN`
                Gameboard.gameboard[i] = gameControl.player2.symbol;
                btnsArr[i].classList.add("gengar");
                btnsArr[i].textContent = Gameboard.gameboard[i];
                wonGame();
                currentPlayer = true;
            }
            
        }
        })
    }

})();


// FUNCTION TO FIND A WINNER
function wonGame() {
    let winConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    let gameWon = false;
    let a;
    for (let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        a = Gameboard.gameboard[condition[0]];
        const b = Gameboard.gameboard[condition[1]];
        const c = Gameboard.gameboard[condition[2]];

        if (a === "" || b=== "" || c === ""){
            continue;
        }
        else{
            if(a === b && b === c){

                console.log("tree");
                gameWon = true;
                break;
            }
        }

    }

    if (gameWon && a === "X"){
        console.log(`${gameControl.player1.symbol} has won`);
        gameStart = false;
    }
    else if (gameWon && a === "O"){
        console.log(`${gameControl.player2.symbol} has won`);
        gameStart = false;
    }

    if (!Gameboard.gameboard.includes("") && gameWon === false){
        console.log("TIE");
        gameStart = false;


    }
}


let playerOneName = document.querySelector(".playerOneName");
let playerTwoName = document.querySelector(".playerTwoName");
submit.addEventListener("click", ()=>{
    event.preventDefault();
    console.log("tree");
    wrapper.style.display = "none";
    board.style.display = "grid";
    mainbox.style.display = "flex";
    playerOneName.textContent = document.querySelector("#player1").value;
    playerTwoName.textContent = document.querySelector("#player2").value;
})

    
