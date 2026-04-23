 let userScore = 0;
  let compScore = 0;

  const choices = document.querySelectorAll(".choice");
  const msg = document.querySelector("#msg");

  const userScore_span = document.querySelector("#user-score");
  const compScore_span = document.querySelector("#comp-score"); 

  //computer choice in the game
  const genCompChoice = ()=>{ 
const options = ["rock", "paper", "scissors"];
const ranIndx = Math.floor(Math.random() * 3);
return options[ranIndx];
  } 
 
  const draw = () =>{
    console.log("It's a draw!");
    msg.innerText = "It's a draw!";
    msg.style.backgroundColor = "";
  }

  const shwowin = (userwin) =>{
    if (userwin) {
        userScore++;
        userScore_span.innerText = userScore; 
      console.log("You win!");
      msg.innerText = "You win!";
      msg.style.backgroundColor = "green";

    } else {
        compScore++;
        compScore_span.innerText = compScore;
      console.log("You lose!");
      msg.innerText = "You lose!";
      msg.style.backgroundColor = "red";
    }
  }
  const playGame = (userchoice) => {
    console.log("user choice =", userchoice);
    const compChoice = genCompChoice();
    console.log("computer choice =", compChoice);

    if (userchoice === compChoice){
      draw();
    }
    else {
      let userwin = true;
      if(userchoice === "rock"){
        //scissors,paper
      userwin = compChoice === "paper" ? false : true;
    } 
    else if (userchoice === "paper"){
      //rock,scissors
      userwin = compChoice === "scissors" ? false : true;
    } 
    else {
      //paper,rock
      userwin = compChoice === "rock" ? false : true;
    }
shwowin (userwin);
  }
  }
  choices.forEach((choice) => {
     choice.addEventListener("click", () => {
      const userchoice = choice.getAttribute("id");
      playGame(userchoice);

    });
  });   
