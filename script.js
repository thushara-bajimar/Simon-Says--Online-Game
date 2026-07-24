let gameSeq = [];
let userSeq = [];
let btns = ["red", "green", "yellow", "blue"];

let level = 0;
let started = false;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false){
        console.log("Game Started!");
        started = true;

        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");

    setTimeout(function() {
        btn.classList.remove("flash");
    }, 300);
}

function levelUp(){
    level++;

    h2.innerText = "Level " + level;

    let rndIdx = Math.floor(Math.random() * 3);
    let rndCol = btns[rndIdx];
    let rndBtn = document.querySelector(`.${rndCol}`);

    console.log(rndIdx);
    console.log(rndCol);
    console.log(rndBtn);

    btnFlash(rndBtn);
}