let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#Reset");
let newbttn= document.querySelector("#new");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msgcontainer");


let turn0=true;
let count=0;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
];
  
  const resetGame=()=>{
    turn0=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
  };

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0)
        {
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        count++;

        let isWinner=checkWinner();

        if(count===9 && !isWinner)
        {
            gameDraw();
        }
    });
});

const gameDraw=()=>{
    msg.innerText=`Game was a Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};


const showWinner =(winner)=>{
   msg.innerText=`Congratulations, Winner is ${winner}`;
   msgContainer.classList.remove("hide");
   disableBoxes();
};

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val ===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
                return true;
            }
        }
    }
}

newbttn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame); 