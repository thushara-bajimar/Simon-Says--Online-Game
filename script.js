let gameSeq = [];
let userSeq = [];
let btns = ["red", "green", "yellow", "blue"];

let level = 0;
let started = false;
let maxScore = 0;

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

    let rndIdx = Math.floor(Math.random() * 4);
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

    if(gameSeq[idx] === userSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }

        // console.log("Same Value");
    }else{
        maxScore = Math.max(maxScore, level*10);

        h2.innerHTML = `Game Over!! Your score is <b>${level*10}<b/> <br/> Highest score ever is ${maxScore} <br/> Press any key to start.`;

        let body = document.querySelector("body");

        body.classList.add("black");
        setTimeout(function(){
            body.classList.remove("black");
        }, 100);

        reset();
    }
}

function userBtnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userCol = btn.getAttribute("id");
    // console.log(userCol);
    userSeq.push(userCol);
    // console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click", userBtnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}