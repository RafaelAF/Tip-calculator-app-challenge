let bill = document.getElementById('bill');
let tip = document.getElementById('tip');
let people = document.getElementById('people');
let btn1 = document.getElementById('tip1');
let btn2 = document.getElementById('tip2');
let btn3 = document.getElementById('tip3');
let btn4 = document.getElementById('tip4');
let btn5 = document.getElementById('tip5');
let reset = document.getElementById('reset');
let h1_1 = document.getElementById('h1-1');
let h1_2 = document.getElementById('h1-2');
let tipPer;
let totalPer;

btn1.addEventListener('click', ()=>{
    if(people.value !== 0){
        tip.value = '';
        let gorj = ((5 / 100) * bill.value) / people.value;
        h1_1.innerHTML = `$${gorj.toFixed(2)}`;
        let total = (bill.value / people.value) + gorj;
        h1_2.innerHTML = `$${total.toFixed(2)}`;
    }
})
btn2.addEventListener('click', ()=>{
    if(people.value !== 0){
        tip.value = '';
        let gorj = ((10 / 100) * bill.value) / people.value;
        h1_1.innerHTML = `$${gorj.toFixed(2)}`;
        let total = (bill.value / people.value) + gorj;
        h1_2.innerHTML = `$${total.toFixed(2)}`;
    }
})
btn3.addEventListener('click', ()=>{
    if(people.value !== 0){
        tip.value = '';
        let gorj = ((15 / 100) * bill.value) / people.value;
        h1_1.innerHTML = `$${gorj.toFixed(2)}`;
        let total = (bill.value / people.value) + gorj;
        h1_2.innerHTML = `$${total.toFixed(2)}`;
    }
})
btn4.addEventListener('click', ()=>{
    if(people.value !== 0){
        tip.value = '';
        let gorj = ((25 / 100) * bill.value) / people.value;
        h1_1.innerHTML = `$${gorj.toFixed(2)}`;
        let total = (bill.value / people.value) + gorj;
        h1_2.innerHTML = `$${total.toFixed(2)}`;
    }
})
btn5.addEventListener('click', ()=>{
    if(people.value !== 0){
        tip.value = '';
        let gorj = ((50 / 100) * bill.value) / people.value;
        h1_1.innerHTML = `$${gorj.toFixed(2)}`;
        let total = (bill.value / people.value) + gorj;
        h1_2.innerHTML = `$${total.toFixed(2)}`;
    }
})



let calcular = ()=>{
    if(people.value !== 0){
        let gorj = ((tip.value / 100) * bill.value) / people.value;
        h1_1.innerHTML = `$${gorj.toFixed(2)}`;
        let total = (bill.value / people.value) + gorj;
        h1_2.innerHTML = `$${total.toFixed(2)}`;
    }
    
}
bill.addEventListener('keyup', ()=>{
    calcular()
})
tip.addEventListener('keyup', ()=>{
    calcular();
})
people.addEventListener('keyup', ()=>{
    if(people.value != 0){
        document.querySelector('#invalid').classList.add('invalid');
        document.querySelector('#invalid').classList.remove('valid');
        calcular()
    }else{
        document.querySelector('#invalid').classList.remove('invalid');
        document.querySelector('#invalid').classList.add('valid');
    }
})
reset.addEventListener('click', ()=>{
    bill.value = '';
    tip.value = '';
    people.value = 1;
    h1_1.innerHTML = '$0.00';
    h1_2.innerHTML = '$0.00'; 
})