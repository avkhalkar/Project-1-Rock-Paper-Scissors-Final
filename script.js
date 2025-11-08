// Buttons

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#comp-score");

// Initial points

let userPoints, compPoints;

userPoints=compPoints=0;


// Returns computer choice

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    // Math.random() => Number between 0 and 1
    const compChoice = options[Math.floor(3*Math.random())];
    console.log(`Computer chose ${compChoice}`);
    return compChoice;
}

// Makes change on screen after draw

function displayDraw(compChoice){
    msg.innerText = `Draw computer chose ${compChoice}`;
    msg.style.backgroundColor = "#081b31";
}

// Makes change on screen after loss

function displayLoss(compChoice){
    msg.innerText = `You lose computer chose ${compChoice}`
    msg.style.backgroundColor = "#ff0000";
}

// Makes change on screen after win

function displayWin(compChoice){
    msg.innerText = `You win computer chose ${compChoice}`
    msg.style.backgroundColor = "#00ff00";
}

//  Evaluate the result

const decideResult = (userChoice, compChoice) => {
    if(userChoice==compChoice){
        console.log(`Draw`);
        console.log(`Comp score: ${compPoints} User score: ${userPoints}`);
        displayDraw(compChoice);
    }
    else{
        if((userChoice=="rock" && compChoice=="paper")||(userChoice=="paper" && compChoice=="scissors")|| (userChoice=="scissors" && compChoice=="rock" )){
            compPoints++;
            console.log("You lose");
            console.log(`Comp score: ${compPoints} User score: ${userPoints}`);
            displayLoss(compChoice);
        }
        else{
            userPoints++;
            console.log("You win");
            console.log(`Comp score: ${compPoints} User score: ${userPoints}`);
            displayWin(compChoice);
        }
    }
}

// Update result on screen

const updateResult = () => {
    user_score.innerText = userPoints;
    comp_score.innerText = compPoints;
}

// Function to play next trial

const playGame = (userChoice) => {
    console.log(`User choice ${userChoice}`);
    let compChoice = genCompChoice();
    decideResult(userChoice, compChoice);
    updateResult();
}

// Event initialization to all of the choices:{rock, paper, scissors}

choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log(`Choice ${userChoice} was selected`);
        playGame(userChoice);
    });
});