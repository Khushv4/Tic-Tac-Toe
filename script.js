document.addEventListener("DOMContentLoaded", ()=>{
  let outer = document.querySelector('#outer');
  let chance = false; // when chance is false it will be 0 otherwise it will be X
  let arr = Array(9).fill(undefined);
  outer.addEventListener("click", (e) =>{
    let cell = e.target;
    let cellNumber = cell.getAttribute("data-cell");
    if(cell.getAttribute("data-clicked")){
      return;
    }
    cell.setAttribute("data-clicked", "true")
    if(chance == true){
      cell.textContent = "X";
      arr[cellNumber] = "X"
      winningCombo("X");
    } else{
      cell.textContent = "O";
      arr[cellNumber] = "O"
      winningCombo("O");
    }

    chance = !chance //it toggles between true and false
  })

  function winningCombo(char){
    let result = document.getElementById("result");
    if(arr[0]==char && arr[1]==char && arr[2]==char){
      result.textContent = `Winner is ${char}`;
    }
    else if(arr[3]==char && arr[4]==char && arr[5]==char){
      result.textContent = `Winner is ${char}`;
    }
    else if(arr[6]==char && arr[7]==char && arr[8]==char){
      result.textContent = `Winner is ${char}`;
    }


    //below are for columns
    else if(arr[0]==char && arr[3]==char && arr[6]==char){
      result.textContent = `Winner is ${char}`;
    }
    else if(arr[1]==char && arr[4]==char && arr[7]==char){
      result.textContent = `Winner is ${char}`;
    }
    else if(arr[2]==char && arr[5]==char && arr[8]==char){
      result.textContent = `Winner is ${char}`;
    }

    //below are for diagonols
    else if(arr[0]==char && arr[4]==char && arr[8]==char){
      result.textContent = `Winner is ${char}`;
    }
    else if(arr[2]==char && arr[4]==char && arr[6]==char){
      result.textContent = `Winner is ${char}`;
    }
  }
})