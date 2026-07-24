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
    }, 270);
}
function userFlash(btn){
    btn.classList.add("userFlash");

    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 270);
}

function levelUp(){
    userSeq = [];
    level++;

    h2.innerText = "Level " + level;

    let rndIdx = Math.floor(Math.random() * 3);
    let rndCol = btns[rndIdx];
    let rndBtn = document.querySelector(`.${rndCol}`);

    console.log(rndIdx);
    console.log(rndCol);
    console.log(rndBtn);

    gameSeq.push(rndCol);
    console.log(gameSeq);

    btnFlash(rndBtn);
}

function checkAns(idx) {
    console.log("Curr level is", level);
    // let idx = level-1;

    if(gameSeq[idx] === userSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }

        console.log("Same Value");
    }else{
        h2.innerText = "Game Over!!! Press any key to start.";
    }
}

function userBtnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);

    userCol = btn.getAttribute("id");
    console.log(userCol);
    userSeq.push(userCol);
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click", userBtnPress);
}
