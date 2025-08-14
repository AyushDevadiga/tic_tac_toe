const home=document.querySelector('.container');
const match= document.querySelector('.game');
var name_without_one=document.getElementById('name_x');
var name_without_two=document.getElementById('name_o');
var arr=[1,0,0,0,1,1,1,0,0];
var flag=true;
var turn_div=document.getElementById('turn');
var player_one=document.getElementById('count1');
var player_two=document.getElementById('count2');
var player1_score=0;
var player2_score=0;





function game_without(){
    match.style.display="flex";
    home.style.display="none";
    name_without_one.innerText='X:Player 1';
    name_without_two.innerText='O:Player 2';


}
function game_with(){
    const name_with_one = document.getElementById('one').value;
    const name_with_two = document.getElementById('two').value;
    if(name_with_one==""||name_with_two==""){
        alert("Please Write the Player Name!!");
    }else{
    match.style.display="flex";
    home.style.display="none";
    name_without_one.innerText="X: "+ name_with_one;
    name_without_two.innerText="O: "+ name_with_two;
   
    }


}
function back(){
    match.style.display="none";
    home.style.display="flex";
    
}

document.querySelector('.box').addEventListener('click',function(e){


    var start=e.target.id;
    if(start&&arr[start]==1||arr[start]==0){
        if(flag==true){
            arr[start]="X";
            document.getElementById(start).innerText="X";
            turn_div.innerText="O's Turn";

        }
        else{
            arr[start]="O";
            document.getElementById(start).innerText="O";
            turn_div.innerText="X's Turn";
        }
        flag=!flag;
        checkwinner(!flag);
        score_card(flag);
    }
    
}
);

function restart(){
   location.reload();
}

function winnerPattern(a,b,c){
    document.getElementById(a).style.backgroundColor="#FFD700";
    document.getElementById(b).style.backgroundColor="#FFD700";
    document.getElementById(c).style.backgroundColor="#FFD700";
}

function checkwinner(player){
     if(arr[0]==arr[1]&&arr[0]==arr[2]){
        if(player){
            turn_div.innerText="X Winner";
            player1_score++;
        }
        else{
            turn_div.innerText="O Winner";
            player2_score++;
        }
        setDisabled();
        winnerPattern(0,1,2);
        
     }
     else if(arr[3]==arr[4]&&arr[3]==arr[5]){
        if(player){
            turn_div.innerText="X Winner";
            player1_score++;
        }
        else{
            turn_div.innerText="O Winner";
            player2_score++;
        }
        setDisabled();
        winnerPattern(3,4,5);
        

     }
      else if(arr[6]==arr[7]&&arr[6]==arr[8]){
        if(player){
            turn_div.innerText="X Winner";
            player1_score++;
        }
        else{
            turn_div.innerText="O Winner";
            player2_score++;
        }
        setDisabled();
        winnerPattern(6,7,8);
        

     }
      else if(arr[0]==arr[3]&&arr[0]==arr[6]){
        if(player){
            turn_div.innerText="X Winner";
            player1_score++;
        }
        else{
            turn_div.innerText="O Winner";
            player2_score++;
        }
        setDisabled();
        winnerPattern(0,3,6);
        

     }
      else if(arr[1]==arr[4]&&arr[1]==arr[7]){
        if(player){
            turn_div.innerText="X Winner";
            player1_score++;
        }
        else{
            turn_div.innerText="O Winner";
            player2_score++;
        }
        setDisabled();
        winnerPattern(1,4,7);
        

     }
      else if(arr[2]==arr[5]&&arr[2]==arr[8]){
        if(player){
            turn_div.innerText="X Winner";
            player1_score++;
        }
        else{
            turn_div.innerText="O Winner";
            player2_score++;
        }
        setDisabled();
        winnerPattern(2,5,8);
        

     }
      else if(arr[0]==arr[4]&&arr[0]==arr[8]){
        if(player){
            turn_div.innerText="X Winner";
            player1_score++;
        }
        else{
            turn_div.innerText="O Winner";
            player2_score++;
        }
        setDisabled();
        winnerPattern(0,4,8);
        

     }
      else if(arr[2]==arr[4]&&arr[2]==arr[6]){
        if(player){
            turn_div.innerText="X Winner";
            player1_score++;
        }
        else{
            turn_div.innerText="O Winner";
            player2_score++;
        }
        setDisabled();
        winnerPattern(2,4,6);
        
     }
     else{
        var count=9;
        for(var i=0;i<arr.length;i++){
            if(arr[i]=="X"||arr[i]=="O"){
                count--;
            }

        }
        if(count==0){
            turn_div.innerText="Its a Draw";
        }
     }
}

function setDisabled(){
    for(var i=0;i<arr.length;i++){
        if(arr[i]==1||arr[i]==0){
            arr[i]=null;
        }
    }
}

function reset(){
    flag=!flag;
    arr=[1,0,0,0,1,1,1,0,0];
    if(flag==true){
        turn_div.innerText="X's Turn";

    }
    else{
        turn_div.innerText="O's Turn";
    }
    for(var i=0;i<arr.length;i++){
        document.getElementById(i).innerText="";
        document.getElementById(i).style.backgroundColor="";
        

    }
}

function score_card(){
    player_one.innerText=player1_score;
    player_two.innerText=player2_score;
}

