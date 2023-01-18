// Physical Gameboard Module
let gameStart = true;
let submit = document.querySelector("#submit");
let wrapper = document.querySelector(".wrapper");
let form = document.querySelector(".form");
let board = document.querySelector(".gameBoard");
let mainbox = document.querySelector(".mainBox");
let reset = document.querySelector(".refresh");

let player1Count = 0;
let player2Count = 0;


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
    const box1 = document.querySelector(".playerBox1");
    const box2 = document.querySelector(".playerBox2");
    const btnsArr = Array.from(grid);
    let currentPlayer = true;
    let gameCount = 0;

    box1.classList.add("playerBoxOne")
    

    for (let i = 0; i < btnsArr.length; i++){
        btnsArr[i].addEventListener("click", ()=>{    
        if (gameStart === true){
            if((currentPlayer === true) &&  (Gameboard.gameboard[i] === "")){
               // playerTurn.textContent = `IT IS PLAYER 2 TURN`
               
                Gameboard.gameboard[i] = gameControl.player1.symbol;
                btnsArr[i].classList.add("totodile");
                const symbolX = document.createElement("img");
                symbolX.classList.add("icon2")
                symbolX.src = "close.png";
                //btnsArr[i].textContent = Gameboard.gameboard[i];
                btnsArr[i].appendChild(symbolX);
                wonGame();
                box1.classList.remove("playerBoxOne");
                box2.classList.add("playerBoxTwo");
                currentPlayer = false;
            }
            else if((currentPlayer === false) && (Gameboard.gameboard[i] === "")){
                //playerTurn.textContent = `It is PLAYER 1 TURN`
                Gameboard.gameboard[i] = gameControl.player2.symbol;
                btnsArr[i].classList.add("gengar");
                const symbolO = document.createElement("img");
                symbolO.src="o.png";
                symbolO.classList.add("icon2")
                //btnsArr[i].textContent = Gameboard.gameboard[i];
                btnsArr[i].appendChild(symbolO);
                wonGame();
                box2.classList.remove("playerBoxTwo");
                box1.classList.add("playerBoxOne")
                currentPlayer = true;
            }
            
        }
        
        })
    }

    
            reset.addEventListener("click", ()=>{
            Gameboard.gameboard = [
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
            for(let i = 0; i < btnsArr.length; i++){
                btnsArr[i].innerHTML = "";
                btnsArr[i].classList.remove("gengar")
                btnsArr[i].classList.remove("totodile")
            }
            
            gameStart = true;
    
})
    

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
        player1Count++;
        let tree = document.querySelector(".playerInfo1");
        let winnerDiv = document.createElement("div")
        winnerDiv.classList.add("winnerText");
        winnerDiv.textContent = "WINNER";
        let winnerBox = document.querySelector(".winnerBox");
        winnerBox.appendChild(winnerDiv)
        
        let pokeball = document.createElement("img");
        pokeball.classList.add("pokeball");
        pokeball.src="pokeball.png";
        let pokeBallBox = document.querySelector(".winnerPokeBalls");
        pokeBallBox.appendChild(pokeball);
        reset.addEventListener("click", ()=>{
            winnerDiv.textContent = "";
            
        });
        
        if(player1Count === 3){
            console.log("YOU ARE THE WORLD CHAMP!!!")
            document.querySelector(".gameboardMain").remove();
            reset.remove();
            winnerDiv.textContent = "WORLD CHAMPION";
            document.querySelector("playerBox2").classList.remove("playerBoxTwo")
        }
        gameStart = false;

        
    }
    else if (gameWon && a === "O"){
        console.log(`${gameControl.player2.symbol} has won`);
        player2Count++;
        let tree = document.querySelector(".playerInfo2");
        let winnerDiv = document.createElement("div")
        winnerDiv.classList.add("winnerText");
        winnerDiv.textContent = "WINNER";
        let winnerBox = document.querySelector(".winnerBox2");
        winnerBox.appendChild(winnerDiv);
        let pokeball = document.createElement("img");
        pokeball.classList.add("pokeball");
        pokeball.src="pokeball.png";
        let pokeBallBox = document.querySelector(".winnerPokeBalls2");
        pokeBallBox.appendChild(pokeball);
        reset.addEventListener("click", ()=>{
            winnerDiv.textContent = "";
        })
        
        if(player2Count === 3){
            console.log("YOU ARE THE WORLD CHAMP!")
            document.querySelector(".gameboardMain").remove();
            reset.remove();
            winnerDiv.textContent = "WORLD CHAMPION";
            document.querySelector("playerBox1").classList.remove("playerBoxOne")
        }
        gameStart = false;
       
    }

    if (!Gameboard.gameboard.includes("") && gameWon === false){
        let tree = document.querySelector(".playerInfo1");
        let tree2 = document.querySelector(".playerInfo2")
        let tieDiv = document.createElement("div");
        let tieDiv2 = document.createElement("div");
        tieDiv.classList.add("winnerText");
        tieDiv2.classList.add("winnerText");
        tieDiv.textContent = "TIE";
        tieDiv2.textContent = "TIE";
        tree.appendChild(tieDiv);
        tree2.appendChild(tieDiv2);
        reset.addEventListener("click", ()=>{
            tieDiv.textContent = "";
            tieDiv2.textContent = "";
        })
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

    
