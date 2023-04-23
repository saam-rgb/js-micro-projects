console.log('hi');
const getUserChoice= userInput =>{
  userInput=userInput.toLowerCase();
  if(userInput === 'rock'){
    return userInput;
  }
    else if(userInput === 'scissors'||userInput === 'scissor'){
    return userInput;
    }
     else if(userInput === 'paper'){
    return userInput;
    }
    else{
      console.log('Invalid entry')
    }
}
// console.log(getUserChoice('scissors'));

const getComputerChoice =()=>{
  randomNumber=Math.floor(Math.random()*3);
  switch(randomNumber){
    case 0:
    return 'rock';
    break;
    case 1:
    return 'scissor';
    break;
    case 2:
    return 'paper';
    break;
    default:
    return 'Invalid';
    break;
  }
}
// console.log(getComputerChoice())

const determineWinner=(userChoice,computerChoice)=>{
  if(userChoice===computerChoice){
    return 'The game was a tie';
  }
    if(userChoice ==='rock' ){
      if(computerChoice==='paper'){
        return 'The computer won';
      }
      else{
        return 'You won';
      }
    }
     if(userChoice ==='paper' ){
      if(computerChoice==='scissors'){
        return 'The computer won';
      }
      else{
        return 'You won';
      }
    }
        if(userChoice ==='scissors' ){
      if(computerChoice==='rock'){
        return 'The computer won';
      }
      else{
        return 'You won';
      }
    }
}

const playGame=()=>{
  userChoice=getUserChoice('paper');
  computerChoice=getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
}

playGame();