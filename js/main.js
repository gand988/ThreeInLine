const btnRun = document.querySelector('#run'); 
var divs = document.querySelectorAll('[data-free="true"]');

// circle will be show on the top of the square
var i=0;
var x=0; 
var old = 0;
var levelArray = []; 
var indexes = []; 
const solutions = [
  // horizontal solutions
  ["0", "1", "2"], 
  ["3", "4", "5"], 
  ["6", "7", "8"], 
  // vertical solutions
  ["0", "3", "6"], 
  ["1", "4", "7"], 
  ["2", "5", "8"], 
  // diagonally solutions
  ["0", "4", "8"], 
  ["2", "4", "6"]
];  

// let myVar = ()=>setInterval(levelUp, 300); 
let myVar = ()=>{
  let animLevel = setInterval(()=>{
    if(i == 10){
    clearInterval(animLevel);
    // myStopFunction();

    old = 0;
    i = 0;
    divs[x].setAttribute("data-free", "false");
    // add the element that go black in the array 
    indexes.push(divs[x].getAttribute('data-index'));
    console.log(indexes);
    // will be a good solution to use a Case switch? 
    divs = document.querySelectorAll('[data-free="true"]');

    /**
     * check with the solutions 
     * m : loop be the solutions
     * n : loop the value inside the solution
     * point : add point when indexes[indexCount] == solutions[m][n]
     */
    
    for (let m = 0; m< solutions.length; m++){
      let point = 0;
      for(let n = 0; n<solutions[m].length; n++){
        let indexCount = 0;  
        // console.log(m, n, solutions.length, solutions[m].length);
        do{
          if(indexes[indexCount] == solutions[m][n]){
            point++; 
            if (point == "3"){
              alert('level up'); 
            }
          }
          indexCount++; 
        }while(indexCount < indexes.length); 
        // console.log("points:", point, "indexCount", indexCount); 
      }
    }


    
  }else{

    /**
     * check until the random is different from the last one 
     */
    old = x; 
    do{
      x = Math.floor(Math.random() * divs.length); 
    }while(x == old); 
    
    divs[x].classList.add('cls_black');
    
    i++; 
    /**
     * save the last value in the array 
     */
    
    
    // remove the black class [OK YOU WORK]
    if (i!=10){
      setTimeout(() => {
        divs[x].classList.remove('cls_black');
      }, 200);
    }
  }
  // console.log(`i: ${i} || x: ${x}`);
  }, 300); 

};

let reset = ()=>{

}; 

btnRun.addEventListener('click', function(){
  myVar();
}); 

/** 
 * how to level up 
 * divs array 
 * [0] [1] [2] 
 * [3] [4] [5]
 * [6] [7] [8]
 * 
 * win : 
 * * horizontal
 * [0,1,2]
 * [3,4,5]
 * [6,7,8]
 * * vertical
 * [0,3,6]
 * [1,4,7]
 * [2,5,8]
 * * diagonally 
 * [0,4,8]
 * [2,4,6] 
 * 
*/