let userscore = 0;
let computerscore = 0;

let msg= document.querySelector("#msg");
const aceess = document.querySelectorAll(".choice");

let user_score_para = document.querySelector("#user-score");
let user_computer_para = document.querySelector("#computer-score");

const gnrate_computer_choice = ()=>{
    const options = ["Rock","Paper","Scissors"];
    const choose = Math.floor(Math.random()*3);
    return options[choose];
}



const ShowWinner = (userWin)=>{
    if(userWin){
        userscore++;
        user_score_para.innerHTML = userscore;

        console.log("You Win !")
        msg.innerHTML = "You Win!";
        
        
        
    }
    else{
        computerscore++;
        user_computer_para.innerHTML=computerscore;
        console.log("You loose ! Play Agian!")
        msg.innerHTML = "You Lose!";
        
        
    }
}

const draw_game = ()=>{
    console.log("The game Was draw");
    msg.innerHTML = "The Game Is Draw";
    
    
}



const playgame = (user_choice) =>{
    console.log("User-Choice",user_choice);
    const compChoice = gnrate_computer_choice();
    console.log("Computer-Choice",compChoice);

    if(user_choice ==compChoice){
        draw_game(); 
    }else{
        let userWin = true;

        if(user_choice=="Rock"){
            userWin = compChoice =="Paper"? false : true;
        }
        else if(user_choice=="Paper"){
            userWin = compChoice =="Scissors"? false : true;
        }
        else{
            userWin = compChoice =="Rock"? false : true;

        }
        ShowWinner(userWin);
    }



}


// console.dir(aceess);

aceess.forEach((choice)=>{
    // console.log(choice);
    const user_choice= choice.getAttribute("id")
    choice.addEventListener("click",()=>{
        // console.log("You are clicked on button",user_id);
        playgame(user_choice);
    })
})