'use strict'

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

// Make navbar transparent when it is on the top
document.addEventListener('scroll',()=>{
  if(window.scrollY>navbarHeight){
    navbar.classList.add('navbar--dark');
  }
  else{
    navbar.classList.remove('navbar--dark');
  }
});


// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event)=>{
  const target= event.target;
  const link = target.dataset.link;
  if (link == null){
    return;
  }
  scrollintoView(link);
});

//Scroll to Contact
const homeContact =document.querySelector('.home__contact');
homeContact.addEventListener('click',()=>{
  scrollintoView('#contact');
})

function scrollintoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior:'smooth'});
}


//make Home transparent
const home = document.querySelector('.home__container');
const homePos = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
  home.style.opacity=1-window.scrollY/homePos;
})

//Show "arrow up" button when scrolling down
const arrowUp=document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=>{
  if(window.scrollY > homePos/2){
    arrowUp.classList.add('visible');
  }
  else{
    arrowUp.classList.remove('visible');
  }
})

// Handle click on the "arrow up" button
arrowUp.addEventListener('click', ()=>{
  scrollIntoView('#home');
})