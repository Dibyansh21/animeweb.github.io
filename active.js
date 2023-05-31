const activepg = window.location.pathname;
console.log(activepg);
const navlinks = document.querySelectorAll('nav a').
forEach(link => {
    if(link.href.includes(`${activepg}`)){
        link.classList.add('active');
    }
})