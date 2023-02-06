let scoreHome = 0
let scoreGuest = 0
document.getElementById("score-home").textContent = scoreHome
document.getElementById("score-guest").textContent = scoreGuest

//Home Buttons//
function add1(){
    document.getElementById("score-home").textContent = scoreHome += 1  
}
function add2(){
    document.getElementById("score-home").textContent = scoreHome += 2  
}
function add3(){
    document.getElementById("score-home").textContent = scoreHome += 3  
}

//Guest Buttons//
function addOne(){
    document.getElementById("score-guest").textContent = scoreGuest += 1  
}
function addTwo(){
    document.getElementById("score-guest").textContent = scoreGuest += 2  
}
function addThree(){
    document.getElementById("score-guest").textContent = scoreGuest += 3  
}

//New Game Button
function newGame(){
    document.getElementById("score-home").textContent = 0
    document.getElementById("score-guest").textContent = 0
    scoreHome = 0
    scoreGuest = 0
}