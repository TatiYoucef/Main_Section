const ToDoTab = [] ;

function Update_Content(){
  let chaine = '' ;
  for (let i = 0; i < ToDoTab.length; i++){
    chaine +=`<p> ${ToDoTab[i]} <button style="margin-left: 20px;" class="Del">Delete</button></p> ` ;
  }

  document.querySelector('.List').innerHTML = chaine ; 

  const Del_button = document.querySelectorAll('.Del') ; //Del_but is an array of buttons

  Del_button.forEach((chaine , i) => {
    Del_button[i].addEventListener('click' , () =>{
      ToDoTab.splice(i , 1) ;
      Update_Content() ;
    })
  })
}

const add_input = document.querySelector('.ToDo_Input') ;
const add_button = document.querySelector('.button01') ;

add_input.addEventListener('keydown' , (event) =>{
  if(event.key === 'Enter'){
    let x = document.querySelector('.ToDo_Input') ;
    if(x.value){
      ToDoTab.push(x.value) ;
      x.value = '' ;
      Update_Content() ;
    } 
  }
}) ;

add_button.addEventListener('click' , () =>{
  let x = document.querySelector('.ToDo_Input');
  if(x.value){
    ToDoTab.push(x.value) ;
    x.value = '' ;
    Update_Content() ;
  }
}) ;
