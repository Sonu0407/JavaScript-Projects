console.log("Welcome to tic tac toe");
let music = new Audio("music.mp3")
let turnMusic = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")

let turn = "X";
let isGameOver = false;

// function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// function to check for a win
const checkWin = () => {
    let boxtext = document.querySelectorAll('.box');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(function(e) {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
         (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && 
         (boxtext[e[0]].innerText !== '')
        ) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isGameOver = true;
            document.querySelector('#img').style.width = '200px';
        }
    })

}

console.log("gameLogic");

// Game Logic
const boxes = document.querySelectorAll('.box')

boxes.forEach( (box) => {
    console.log(box);
    
    box.addEventListener('click', function(e) {
        console.log(e.target);
        if (e.target.innerText === "") {
            e.target.innerText = turn;
            turnMusic.play();
            turn = changeTurn();
            checkWin();
            if (!isGameOver) {
                document.querySelector('.info').innerHTML = `<p>Turn for ${turn}</p>`;
            }
        }
    })
})

const reset = document.querySelector('#reset');

reset.addEventListener('click', function(e) {
    console.log(e.target);
    let all_box = document.querySelectorAll('.box')
    all_box.forEach( (e) => {
        e.innerText = "";
        document.querySelector('#img').style.width = '0px';
        turn = "X"
        isGameOver = false;
        document.querySelector('.info').innerHTML = `<p>Turn for ${turn}</p>`;

    })
    
})

