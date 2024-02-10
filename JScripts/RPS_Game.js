let Score = {
  Wins : 0 ,
  Loss : 0 ,
  Ties : 0 ,
};

function random_Int(Binf , Bsup){ //return random value between Binf and Bsup
  let x = Math.random() ;
  let Stop = false , i = 1 , Nbrel = Bsup - Binf + 1;

  while(!Stop){
    if((i - 1)/Nbrel < x && x <= i / Nbrel) Stop = true ;
    else i++ ;
  }

  i-- ;
  return(i + Binf) ;
}

function ComputerMove(){
  let x = random_Int(1 , 3) ;
  if(x === 1) return 'Rock' ;
  if(x === 2) return 'Paper' ;
  if(x === 3) return 'Scissors' ;

  return null ;
}

function Win_Test(User){
  let Computer = ComputerMove() ;
  let stat = null ;

  switch(User){
    case 'Rock':
    if(Computer === 'Rock'){
      stat = 'Tie' ; 
      Score.Ties++ ;
    } else if(Computer === 'Paper'){
      stat = 'Loss' ;
      Score.Loss++ ;
    } else {
      stat = 'Win' ;
      Score.Wins++ ; 
    }           
    break ;

    case 'Paper':
    if(Computer === 'Rock'){
      stat = 'Win' ; 
      Score.Wins++ ;
    } else if(Computer === 'Paper'){
      stat = 'Tie' ;
      Score.Ties++ ;
    } else {
      stat = 'Loss' ;
      Score.Loss++ ; 
    }     
    break ;

    case 'Scissors':
    if(Computer === 'Rock'){
      stat = 'Loss' ; 
      Score.Loss++ ;
    } else if(Computer === 'Paper'){
      stat = 'Win' ;
      Score.Wins++ ;
    } else {
      stat = 'Tie' ;
      Score.Ties++ ; 
    }   
    break ;
  }

  document.querySelector('.result').innerHTML = `<img src="Images/png/${User}-emoji.png"> - <img src="Images/png/${Computer}-emoji.png"> . It's a ${stat}! . Wins : ${Score.Wins} , Losses : ${Score.Loss} , Ties : ${Score.Ties}.` ;
}

function Autoplay(){

  ID = setInterval(function(){
    let User = ComputerMove() ;
    Win_Test(User); 
  } , 1000) ;

  truth = true ;
}

let truth = false ;
let ID ;

const button_rock = document.querySelector('.rock');
const button_paper = document.querySelector('.paper');
const button_scissors = document.querySelector('.scissors');
const button_reset = document.querySelector('.Reset');
const button_autoPlay = document.querySelector('.Auto');


button_rock.addEventListener('click' , () =>{
  Win_Test('Rock') ;
  localStorage.setItem('score',JSON.stringify(Score)) ;
}) ;

button_paper.addEventListener('click' , () =>{
  Win_Test('Paper') ;
  localStorage.setItem('score',JSON.stringify(Score)) ;
}) ;

button_scissors.addEventListener('click' , () =>{
  Win_Test('Scissors') ;
  localStorage.setItem('score',JSON.stringify(Score)) ;
}) ;

button_reset.addEventListener('click' , () => {
  Score.Wins = Score.Loss = Score.Ties = 0 ;
  document.querySelector('.result').innerHTML = `\nWins : ${Score.Wins} , Losses : ${Score.Loss} , Ties : ${Score.Ties}.` ;
  localStorage.setItem('score',JSON.stringify(Score)) ;
}) ;

button_autoPlay.addEventListener('click' , () => {
  if(!truth){
    Autoplay() ;
    document.querySelector('.Auto').innerHTML = 'Stop' ;
  }else{
    clearInterval(ID) ;
    document.querySelector('.Auto').innerHTML = 'Auto Play' ;
    truth = false ;
  }
}) ;

document.querySelector('body').addEventListener('keydown' , (event) => {
  let key = event.key ;
  switch(key){
    case 'r': Win_Test('Rock') ;
    break ;
    case 'p': Win_Test('Paper') ;
    break ;
    case 's': Win_Test('Scissors') ;
    break ;
  }
})

let x = "change" ;
console.log("Vesrion 2") ;

if( localStorage.getItem('score') ) Score = JSON.parse(localStorage.getItem('score')) ; //if we already stored , we pull