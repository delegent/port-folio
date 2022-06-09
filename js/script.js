const navBtn = document.querySelector('#navbar-toggle');
const navDiv = document.querySelector('.navbar-collapse');

navBtn.addEventListener('click',()=>{
    navDiv.classList.toggle('showNav');
});


let resizeTimer;
window.addEventListener('resize',()=>{
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(()=>{
        document.body.classList.remove('resize-animation-stopper');},400);
    })
let img = document.getElementById('home-img');
img.addEventListener('mouseover',function(){
    
        img.src = "https://bonzonate.co.za/images/2021/02/14/faceman.gif"
    
})
img.addEventListener('mouseout',function(){
    
    img.src = "https://bonzonate.co.za/images/2021/02/14/faceman.gif"

})
//about

// remember
// let modeBtn = document.querySelector(".mode-btn");
// modeBtn.addEventListener('click',function(){
//     let rootVar = document.querySelector(':root');
//     rootVar.style.setProperty('--green','yellow');
//     rootVar.style.setProperty('--black','#fff');
//     rootVar.style.setProperty('--nero','#e3e3e3');
//     rootVar.style.setProperty('--text','#111');
//     rootVar.style.setProperty('--white','black');
    




//     // --green :#00b7ff;
//     //  --black: #111;
//     //  --nero:#252525;
//     //  --transition:all 0.4s ease;
//     //  --heading:rgb(58, 58, 58);
//     //  --text:#d0d0d0;
//     //  --white:#fff;
// })