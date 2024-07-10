const prompt = require("prompt-sync")();

const answer = prompt("Would you like to Play(y/n)?")

if (answer.toLowerCase() === "y"){ 
    const answer2 = prompt("would you like to go right (left/right)?")
    if(answer2 === "left"){
        console.log("You go left and fall of a bridge.You Lost!")
    }else{
        console.log("You good to Go....") 
        const answer3 = prompt("Wouldyou like to cross the bridge or turn around (cross/turn)?")
        if(answer3 === "cross"){
            console.log("Mission successfull!")
        }else
        console.log ("You are Afraid!")
    }
}else{
    console.log("thats too bad!")
}