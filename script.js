let rate = document.getElementsByClassName('OrderNow1');
let h3 = document.querySelectorAll('.OrderNow1 h3'); 
let btn = document.querySelectorAll('.OrderNow1 .OrderIt');
let Increment = document.querySelectorAll('#Increment');
let Decrement = document.querySelectorAll('#Decrement');

let count = [0,0,0,0,0,0,0,0,0];

function Increments(index) {
    let para = document.querySelectorAll('#Counts');
    count[index]++;
    para[index].textContent = count[index]; 
    // console.log(para[index].textContent);
}
function Decrements(index){
    let para = document.querySelectorAll('#Counts');
    if(count[index]>0){
        count[index]--;
        para[index].textContent = count[index]; 
    }else{
        count[index]=0;
        para[index].textContent = count[index]; 
    }
}
function CalculatePrice(){
    let h2 = document.querySelectorAll('.Rate h2');
    let h3 = document.querySelector('.OrderNow1 h3');
    let totPrice = 0;

    // assuming count[] contains quantities for each item
    for (let i = 0; i < h2.length; i++) {
        // ✅ get text inside <h2> and convert to integer
        let price = parseInt(h2[i].textContent, 10);

        // ✅ make sure count[i] is also a number
        let quantity = parseInt(count[i], 10);

        totPrice += price * quantity;
    }
    h3.textContent='You Will Have to Pay: $'+totPrice
}