let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let btn=document.querySelector("#btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO= true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetgame=()=>{
    turnO=true;
    enabledboxes();
    msgcontainer.classlist.add("hide");

}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO = false;

        }
        else{
            box.innerText="X";
            turnO = true;
        }
        box.Disabled=true;

        checkWinner();
    });
}); 
    const Disabledboxes=() =>{
        for(let box of boxes){ 
        box.disabled=true;
        }
    };
    const enabledboxes=() =>{
        for(let box of boxes){ 
        box.disabled=false;
        box.innerText="";
        }
    };
    const showwinner=(winner) => {
        msg.innerText=`congratulations, Winner is ${winner}`;
        msgcontainer.classlist.remove("hide");

};
    const checkWinner=() => {
        for(let pattern of winPatterns) {
            let pos1Val=boxes[pattern[0]].innerText;
            let pos2Val=boxes[pattern[1]].innerText;
            let pos3Val=boxes[pattern[2]].innerText;

            if (pos1Val != ""  && pos2Val !="" && pos3Val !=""){
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                    console.log("winner",pos1Val);

                }
            }
        }
    };
    btn.addEventListener("click",resetgame);
    reset.addEventListener("click",resetgame);
