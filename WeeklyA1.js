
const prompt = require('prompt-sync')(); // this allows prompts to work

let gamemode = prompt("What gamemode would yo like to play([1] max score or [2] three out): ");
let isPlaying = true;
var points = 0;
var radNum3;


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function question(x, y){
    let radNum1 = getRandomInt(x, y);
    let radNum2 = getRandomInt(x, y);
    let symbol;
    var answer;

    if(radNum3 === 1){
        answer = radNum1 + radNum2;
        symbol = "+";
    }
    else if(radNum3 === 2){
        answer = radNum1 - radNum2;
        symbol = "-";
    }
    else if(radNum3 === 3){
        answer = radNum1 * radNum2;
        symbol = "*";
    }
    else if(radNum3 === 4){
        answer = radNum1 / radNum2;
        symbol = "/";
    }
    let input = prompt(`Solve ${radNum1} ${symbol} ${radNum2} = `);
    if(isNaN(input)){
        if(input === "skip"){
            lives --;
            if(gamemode === "2"){
                console.log(`You have (${lives}/3) lives left.`);
            }
            return "Next Question";
        }
        else{
            input = prompt(`You have one more chance to solve ${radNum1} ${symbol} ${radNum2} = `);
        }
    }
    else{
        if(Number(input) === answer){
            points += 10;
            return "Correct +10 points\n";
        }
        else if(isNaN(input)){
            return "Next Question\n";
        }
        else{
            if(gamemode === "1"){
                points -= 5;
                return `Wrong, the answer was ${answer}, -5 points\n`;
            }
            else{
                lives--;
                return `You have (${lives}/3) lives left.\n`;
            }
        }
    }
}

while(isPlaying === true){
    if(gamemode === "1"){
            let difficulty  = prompt("What difficulty ([1] easy, [2] med, [3] hard): ");
            if(difficulty  === "1"){
                for(i=1;i<20;i++){
                    radNum3 = getRandomInt(1,2)
                    console.log(question(1,9));
                }
                console.log(`Your score was ${points}`);
                console.log("Game Over");
                isPlaying = false
            } 
            else if(difficulty  === "2"){
                for(i=1;i<20;i++){
                    radNum3 = getRandomInt(1,3)
                    if(radNum3 === 1 || radNum3 === 2){
                        console.log(question(1,99));
                    }
                    else{
                        console.log(question(1,9));
                    }
                }
                console.log(`Your score was ${points}`);
                console.log("Game Over");
                isPlaying = false;
            }
            else if(difficulty  === "3"){
                for(i=1;i<20;i++){
                radNum3 = getRandomInt(1,4)
                if(radNum3 === 1 || radNum3 === 2){
                    console.log(question(1,200));
                }
                else if(radNum3 === 3){
                    console.log(question(1,99));
                }
                else if(radNum3 === 4){
                    console.log(question(1,9));
                }
                }
                console.log(`Your score was ${points}`);
                console.log("Game Over");
                isPlaying = false;
            }
        }
        else if(gamemode === "2"){
            var lives = 3;
            let difficulty = prompt("What difficulty ([1] easy, [2] med, [3] hard): ");
             if(difficulty  === 1){
                while(lives !== 0){
                    radNum3 = getRandomInt(1,2);
                    if(radNum3 === 1 || radNum3 === 2){
                        console.log(question(1,9));
                    }
                    if(points <= 0){
                        points = 0;
                        console.log(`your score is ${points}\n`);
                    }
                    else{
                        console.log(`your score is ${points}\n`);
                    }
                }
                console.log(`Your final score was ${points}`)
                isPlaying = false;
            } 
            if(difficulty  === "2"){
                while(lives !== 0){
                    radNum3 = getRandomInt(1,3);
                    console.log(question(1,12));
                    if(points <= 0){
                        points = 0;
                        console.log(`your score is ${points}\n`);
                    }
                    else{
                        console.log(`your score is ${points}\n`);
                    }
                }
                console.log(`Your final score was ${points}`)
                isPlaying = false;
            }
                if(difficulty  === "3"){
                    while(lives !== 0){
                        radNum3 = getRandomInt(1,4);
                        if(radNum3 === 1 || radNum3 === 2){
                            console.log(question(1,200));
                        }
                        else if(radNum3 === 3){
                            console.log(question(1,99));
                        }
                        else if(radNum3 === 4){
                            console.log(question(1,9));
                        }
                        else if(points <= 0){
                            points = 0;
                            console.log(`your score is ${points}\n`);
                        }
                        else{
                            console.log(`your score is ${points}\n`);
                        }
                }
                console.log(`Your final score was ${points}`)
                isPlaying = false;
            }
        }
        else{
            gamemode = prompt("What gamemode would you like to play(max score or three out): ");
        }
}


 
   
