console.log("Welcome to MyTicTacToe");

//Music Material
let bg_music = new Audio("music.mp3");
let turn_music = new Audio("ting.mp3");
let gameOver_music = new Audio("gameover.mp3"); 

//Initial Default Value 
let turn = "X";

//Function to change the turn
const ChangeTurn = ()=>{
    return turn == "X"?"O" : "X";
}

//Function to Check for a Win
const CheckWin = ()=>{

}

//Game Logic
let Boxes = document.getElementsByClassName('box');
//Create Array of Boxes and run forEach in this.
Array.from(Boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    //OnClick This Happens:-
    element.addEventListener('click',()=>{
        if(element.innerText == ""){
            //Initial default value takes place
            element.innerText = turn;
            //Change Turn
            turn = ChangeTurn();
            //Play Music
            turn_music.play();
            //Check Win or Not
            CheckWin();
            //Change text for whose turn
            document.getElementsByClassName('Info').innerText = "Turn For " + turn; 
        }
    })
})
