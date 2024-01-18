let boxs = document.querySelectorAll(".box");
let new_btn = document.querySelector(".new_btn");
let reset_btn = document.querySelector(".reset_btn");
let msg = document.querySelector(".Winner_name");
let arr = [[0,1,2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let turn = "player1";
let cont = 0;



boxs.forEach((box) => {
    
box.addEventListener("click", () => {

    if(turn === "player1"){
        box.innerText = "X";
        turn = "player2";
    }else{
          
        box.innerText = "O";
        turn = "player1";
    }
        cont++;
       
        if( cont === 9){
      
            msg.innerText = "This Game is DRAW ";
            msg.classList.remove("hide");
            new_btn.classList.remove("hide");
         }    
        console.log(cont);
     box.disabled = true;
      
     if(chickWinner()){

        if(turn === "player1"){
            turn = "player2";
        }else{

             trun = "player1";
            }

        msg.innerText = trun;
        msg.classList.remove("hide");
        new_btn.classList.remove("hide");

        disable(); 

          
     }
});  
 });

 function chickWinner(){
    
      for(let i of arr){
        let index = boxs[i[0]].innerText;
        let index_2 = boxs[i[1]].innerText;
        let index_3 = boxs[i[2]].innerText;

        if(index !== "" && index_2 !== "" && index_3 !== ""){
            if(index === index_2 && index_2 === index_3){
                return true;
            }
        }
      }

 }

 function disable(){
      
     boxs.forEach((box) => {
          
        box.disabled = true;
     });
 }

 new_btn.addEventListener("click", unable);
 reset_btn.addEventListener("click", unable);

 function unable(){
        
    boxs.forEach((box) =>{
         
        box.disabled = false;
    });
      
     empty();
    
 }
  
  function empty(){
      
      boxs.forEach((box) => {
           
        box.innerHTML = "";

      });

       msg.innerHTML = "";
       msg.classList.add("hide");
       new_btn.classList.add("hide");
       turn = "player1";
       cont = 0;
  }


