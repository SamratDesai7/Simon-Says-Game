let gameseq =[];
let userseq =[];
let started = false;
let level =0;
let h3 = document.querySelector("h3")
let btns = ["box1","box2","box3","box4"]
    function startGame() {
        if (!started) {
            started = true;
            levelup();
    }
}

document.addEventListener("keypress", startGame);
document.addEventListener("touchstart", startGame);

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
    btn.classList.remove("flash");
    },250)
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
    btn.classList.remove("userflash");
    },250)
}

function levelup(){
    userseq =[];
    level++;
    h3.innerText = `level ${level}`;
    let randomno= Math.floor(Math.random()*4);
    let randomcolor = btns[randomno];
    let randombtn =  document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor)
    btnflash(randombtn);
}
function checkAns(idx){
    if (userseq[idx]===gameseq[idx]) {
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h3.innerHTML =`Game Over! Your Score Was <b>${level}<b><br>Click to Play Again`;
        reset();
    }
}

function btnPress(){
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}
let allbtns = document.querySelectorAll(".box-btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress )
}
function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}