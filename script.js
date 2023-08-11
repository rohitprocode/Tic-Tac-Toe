console.log("Welcome to MyTicTacToe");

//Music Material
let bg_music = new Audio("music.mp3");
let turn_music = new Audio("ting.mp3");
let gameOver_music = new Audio("gameover.mp3");

//Initial Default Value 
let turn = "X";

//Function to change the turn
const ChangeTurn = () => {
    return turn == "X" ? "O" : "X";
}

//Function to Check for a Win
const CheckWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let WinCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    WinCondition.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.Info').innerText = boxtext[e[0]].innerText + " Won ";
        }
    })
}

//Game Logic
let Boxes = document.getElementsByClassName('box');
//Create Array of Boxes and run forEach in this.
Array.from(Boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    //OnClick This Happens:-
    element.addEventListener('click', () => {
        debugger
        if (boxtext.innerText === "") {
            //Initial default value takes place
            boxtext.innerText = turn;
            //Change Turn
            turn = ChangeTurn();
            //Play Music
            turn_music.play();
            //Check Win or Not
            CheckWin();
            //Change text for whose turn
            document.getElementsByClassName('Info')[0].innerText = "Turn For " + turn;
            
        }
    })
})
