
let singles = [0,0,0,0,0,0]
let doubles = [0,0,0,0,0,0]
let triples = [0,0,0,0,0,0]

let totalRoll = 0
let totalSum = 0


function random(){

const a = Math.floor((Math.random()*6)+1)
//console.log(a)
   return a
}

function temp(){
    console.log(document.getElementById("diceNum").value)
    console.log(document.getElementById("rollNum").value)

    console.log(totalRoll)
}

function roll(){
    var diceNum = document.getElementById("diceNum").value
    console.log(diceNum)
    var rollNum = document.getElementById("rollNum").value
    console.log(rollNum)
    
    totalRoll += Number(rollNum);
    

    if (diceNum <1 || diceNum >3){
        console.log("error")
    }
    else{
        for (let i =0; i<rollNum; i++){
            if (diceNum == 1){
                rollOne()
            }
            else if(diceNum == 2){
                rollTwo()
            }
            else{
                rollThree()
            }
    
    
        }
    }
    console.log(totalSum + ":" + totalRoll)
    document.getElementById("mean").innerHTML = Number(totalSum/totalRoll)
    
}

function rollOne(){
    let val = random();
    totalSum += Number(val)
    document.getElementById("dice2").src = "die" + val + ".png"
}
function rollTwo(){
    let val = random();
    let val2 = random();
    totalSum += Number(val + val2)
    console.log(totalSum)
    document.getElementById("dice1").src = "die" + val + ".png" 
    document.getElementById("dice2").src = "die" + val2 + ".png"
}
function rollThree(){
    let val = random();
    let val2 = random();
    let val3 = random();
    totalSum += Number(val + val2 + val3)
    console.log(totalSum)
    document.getElementById("dice1").src = "die" + val + ".png"
    document.getElementById("dice2").src = "die" + val2 + ".png"
    document.getElementById("dice3").src = "die" + val3 + ".png"
    
}
function meanFinder(){

    
}