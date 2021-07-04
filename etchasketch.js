//Etch a Sketch
//create 16x16 grid of squares using js (put in a container div)
//Set up a “hover” effect so that the grid divs change color when your mouse passes over them,
// leaving a (pixelated) trail through your grid like a pen would. 
//Add a button to the top of the screen which will clear the current grid
// and send the user a popup asking for the number of squares per side for the new grid. 
//Once entered, the new grid should be generated in the same total space as before (e.g. 960px wide) 
//so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100.

  const choice = 3;
  
  const butt = document.querySelector('button')
  const buttons = butt.addEventListener("click", () =>{
      
     makeGrid(),makeSquares(choice)
  });

  //Change the grid to the desired size
  function makeGrid() {
    
    var r = document.querySelector(':root');
    r.style.setProperty('--num', choice);
  } 

//make the number of divs required to fill the grid
function makeSquares(num) {
     
  space = document.querySelector ("#gameSpace"); 

  for (i = 0; i < (num* num) ;i++ ) {

   div = document.createElement('div');
   div.className = "box";
   space.appendChild(div);

  }
}






