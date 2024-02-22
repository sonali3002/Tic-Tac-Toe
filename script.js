let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newgameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;//playerX and playerO
let count=0;
const winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        count++;
        if(turnO){//playerO
           box.innerText="O";
           box.style.color="rgb( 205,195,146)";
            turnO=false;
        }
        else{//playerX
            box.innerText="X";
            box.style.color="rgb(228, 208, 216)"
            turnO=true;
        }
        box.disabled=true; //aik bar kisi box me val likhne k baad wo chnage na ho pae
        checkWinner();
        let isWinner=checkWinner();
        if(count===9 && !isWinner  )checkDraw();
    })
})
const resetGame=()=>{
    count=0;
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}!!`;
    msgContainer.classList.remove("hide");
    disableBoxes();//aik winner mil gya jab toh fir boxes click na ho further
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        // console.log(pattern);
        // console.log(pattern[0],pattern[1],pattern[2]);
       let posn1=boxes[pattern[0]].innerText;
       let posn2=boxes[pattern[1]].innerText;
       let posn3=boxes[pattern[2]].innerText;
        if(posn1!="" && posn2!="" && posn3!=""){
            if(posn1===posn2 && posn2===posn3){console.log("winner",posn1);
            showWinner(posn1);
            break;
                            }
        }
}}
const checkDraw=()=>{
        msg.innerText="Draw!Better luck next time :)!"
        msgContainer.classList.remove("hide");
        disableBoxes();
}
newgameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);