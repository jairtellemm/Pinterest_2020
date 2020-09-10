const nav = document.querySelector('nav');
let prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', ()=>{
    let currentScrollPos = window.pageYOffset;

    if(prevScrollpos < currentScrollPos){
        nav.classList.add('hide');
    }else{
        nav.classList.remove('hide');
    }
    prevScrollpos = currentScrollPos;
})

//--------------------header 2----------------------------------

 const header2 = document.querySelector('.header2');
//const div = document.querySelector('header');
let prevScrollpos2 = window.pageYOffset;


window.addEventListener('scroll', ()=>{
    let currentScrollPos2 = window.pageYOffset;

    if(prevScrollpos2 < currentScrollPos2){
        header2.classList.add('hide2');
//        div.style.backgroundColor='transparent';
    }else{
        header2.classList.remove('hide2');
    }
    prevScrollpos2 = currentScrollPos2;
})

//--------------------------------------------------------
 const footer = document.querySelector('footer');
//const div = document.querySelector('header');
let prevScrollpos3 = window.pageYOffset;


window.addEventListener('scroll', ()=>{
    let currentScrollPos3 = window.pageYOffset;

    if(prevScrollpos3 < currentScrollPos3){
        footer.classList.add('hide3');
//        div.style.backgroundColor='transparent';
    }else{
        footer.classList.remove('hide3');
    }
    prevScrollpos3 = currentScrollPos3;
})
