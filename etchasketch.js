//Etch a Sketch

  const space = document.querySelector ("#gameSpace"); 
  const r = document.querySelector(':root');
  const butt = document.querySelector('button');
  const buttons = butt.addEventListener("click", changeGrid);
  var choice = 16;

  //Setup the default play area
  window.addEventListener('load', () => {

    makeGrid(choice), makeSquares(choice)
    
  });
  //Get the users desired size of sketch pad
 
      function changeGrid() {

      sq = prompt("Enter how many squares tall you want your sketch pad/ Max is 50");
      if (sq !== null)
           if (sq<0 || sq>50) {

          alert("Please pick a number between 1 and 50");
          changeGrid();

      } else {
          choice = sq;
          clearGrid(), makeGrid(choice), makeSquares(choice);
      }
    };
  
  //Empty the grid container between plays
  function clearGrid(){
    
      const gridArray = Array.from(space.childNodes);
      gridArray.forEach((element) => {
      space.removeChild(element);
      });
    }
 
  //Change the grid to the desired size
 function makeGrid() {
   
    r.style.setProperty('--num', choice);

  } 

//make the number of divs required to fill the grid
function makeSquares(num) {

  for (i = 0; i < (num* num) ;i++ ) {

   divs = document.createElement('div');
   divs.className ="box";
   divs.addEventListener("mouseover", changeColor);
   
   space.appendChild(divs);
  }
};

// Now change the color of the grid squares as the mouse is held over them
function changeColor(grid) {
  var color = [, "#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C"];
  random = color[Math.floor(Math.random() * color.length)];
  grid.target.style.backgroundColor = random;
     
  };

