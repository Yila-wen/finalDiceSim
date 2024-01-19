
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

    let tmp = Number(totalRoll-1)
    

    console.log(tmp)
    console.log(totalRoll)
}

function roll(){
    var diceNum = document.getElementById("diceNum").value
    var rollNum = document.getElementById("rollNum").value
    
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
    document.getElementById("mode").innerHTML = modeFinder()
    document.getElementById("median").innerHTML = medianFinder()
}

function rollOne(){
    let val = random();
    totalSum += Number(val)
    singles[val-1] ++
    document.getElementById("dice2").src = "die" + val + ".png"
}
function rollTwo(){
    let val = random();
    let val2 = random();
    const combination = Number(val + val2)
    totalSum += combination
    if (combination >6){
        doubles[combination%7] ++
    }
    else{
        singles[combination-1] ++
    }
    document.getElementById("dice1").src = "die" + val + ".png" 
    document.getElementById("dice2").src = "die" + val2 + ".png"
}
function rollThree(){
    let val = random();
    let val2 = random();
    let val3 = random();
    const combination = Number(val + val2 + val3)
    totalSum += combination
    if (combination >12){
        triples[combination%13] ++
        console.log(triples)
    }
    else if(combination >6){
        doubles[combination%7] ++
    }
    else{
        singles[combination-1] ++
    }
    document.getElementById("dice1").src = "die" + val + ".png"
    document.getElementById("dice2").src = "die" + val2 + ".png"
    document.getElementById("dice3").src = "die" + val3 + ".png"
    
}
function medianFinder(){
let fullArray = singles.concat(doubles, triples)

let middle = -1;
let index = -1;
let a = 0
let midLocation = -1;
if (totalRoll%2 == 1){
    midLocation = (totalRoll-1)/2
    for (let i = 0; i<18;i++){
        if (a <=midLocation){
            a += fullArray[i];
            index = i;}
    }
    
    return index+1;
}
else {
    midLocation = (totalRoll/2)-1
    duoStorage = 0;

    if (midLocation == 0){
        midLocation+1;
    }
    for (let i = 0; i<18;i++){
        if (a <=midLocation){
            a += fullArray[i];
            index = i;
        
            if(a == midLocation){
                duoStorage = index+1;
            }
        }
    }
    if (!((index+1) == duoStorage)){
        console.log(midLocation + " : " + Number(index+1) + " : "+ duoStorage)
        console.log("METHOD RAN: "+ Number((index+1)+(duoStorage)))
        return Number(((index+1)+(duoStorage))/2);
    }
    return index+1;

    // if(a > midLocation){
    //     return index+1;
    // }
    
    // let checker = false;

    // for (let i = 0; i<18;i++){
    //     if (a <=midLocation){
    //         a += fullArray[i];
    //         if (checker == true && a > midLocation){
    //             console.log("HEREHERE")
    //             return Number(((index+1)+(index+2))/2)
    //         }
    //         else{
    //         index = i;
    //     }

    //         if (a > midLocation){
    //             console.log("BYEBYE")
    //             return index+1;

    //         }
    //         else if(a == midLocation){
    //             checker = true;
    //         }
            
    //     }
    //     }

   
}

}
function modeFinder(){
let fullArray = singles.concat(doubles, triples)
console.log(fullArray)
let mode = -1;
let highest = -1;
let location = -1;
for (let i = 0; i<18;i++){
    
    if (highest < fullArray[i]){
        highest = fullArray[i]
        location = i;
    }
}
return location+1;

}