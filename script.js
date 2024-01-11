let diceNum = document.getElementById("diceNum")

let singles = [0,0,0,0,0,0]
let doubles = [0,0,0,0,0,0]
let triples = [0,0,0,0,0,0]

function random(){

const a = Math.floor((Math.random()*6)+1)
console.log(a)
   return a
}

function temp(){console.log(diceNum)}

function roll(){
    

    if (diceNum <1 || diceNum >3){
        console.log("error")
    }
    else{
        for (let i =0; i<rollNum; i++){
            if (diceNum === 1){
                rollOne()
            }
            else if(diceNum === 2){
                rollTwo()
            }
            else{
                rollThree()
            }
    
    
        }
    }
}

function rollOne(){
document.getElementById("dice2").src = "die" + random() + ".png"
}
function rollTwo(){
    document.getElementById("dice1").src = "die" + random() + ".png" 
    document.getElementById("dice2").src = "die" + random() + ".png"
}
function rollThree(){
    document.getElementById("dice1").src = "die" + random() + ".png"
    document.getElementById("dice2").src = "die" + random() + ".png"
    document.getElementById("dice3").src = "die" + random() + ".png"
    
}

