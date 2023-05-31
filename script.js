let counter = document.querySelector('h1');
let count = 1;

setInterval(()=>{
    counter.innerText = count;
    count++;

    if(count > 18) location.replace('first.html');
},1000)