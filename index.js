let homePts= document.getElementById("home-ptn")
let awayPts = document.getElementById("away-ptn")
homeScore=0
awayScore=0

function plus1(){
    homeScore +=1
    homePts.textContent = homeScore
}
function plus2(){
    homeScore +=2
    homePts.textContent = homeScore
}
function plus3(){
    homeScore +=3
    homePts.textContent = homeScore
}

function aplus1(){
    homeScore +=1
    awayPts.textContent = homeScore
}
function aplus2(){
    homeScore +=2
    awayPts.textContent = homeScore
}
function aplus3(){
    homeScore +=3
    awayPts.textContent = homeScore
}