let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];

let appleEl = document.getElementById('apple-el');
let orageEl = document.getElementById('orange-el');

for(let i = 0; i < fruit.length; i++){
    if(fruit[i] === "🍎"){
        appleEl.textContent += fruit[i]
    }else{
        orageEl.textContent += fruit[i]
    }
}