let counter = document.querySelector('h2');
let count = 1;

setInterval(()=>{
    counter.innerText = count;
    count++;

    if(count > 5) location.replace('naruto.html');
},1000)