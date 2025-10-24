let Inc=document.getElementById('Inc')
let Dec=document.getElementById('Dec')
let Val=document.getElementById('Val');
let count=0;
function Increment(){
    if(count<5){
        count++;
        Val.textContent=count;
    }else{
        count=5;
        Val.textContent=count;
    }
}
function Decrement(){
    if(count>0){
        count--;
        Val.textContent=count;
    }else{
        count=0;
        Val.textContent=count;
    }
}
let h2=document.getElementById('Thank');
let seres=document.getElementById('SeeRes')
let rated=document.getElementById('rated');
function Submit(){
    h2.textContent="Thank You For the Feedback";
    rated.textContent="You Have Rated: "+parseInt(count)+"/5"
}