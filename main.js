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
});

function scrollintoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior:'smooth'});
};


//make Home transparent
const home = document.querySelector('.home__container');
const homePos = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
  home.style.opacity=1-window.scrollY/homePos;
});

//Show "arrow up" button when scrolling down
const arrowUp=document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=>{
  if(window.scrollY > homePos/2){
    arrowUp.classList.add('visible');
  }
  else{
    arrowUp.classList.remove('visible');
  }
});

// Handle click on the "arrow up" button
arrowUp.addEventListener('click', ()=>{
  scrollintoView('#home');
});

//Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click',(e)=>{
  //span tag가 클릭되는 경우 처리 
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  
  if (filter==null){
    return;
  }

  // Remove selection from the previous item and select the new one
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const target = e.target.nodeName === 'BUTTON'?e.target: e.target.parentNode;
  target.classList.add('selected');


  projectContainer.classList.add('anim-out');
  
  setTimeout(()=>{
    projects.forEach((project)=>{
    if(filter ==='*' || filter === project.dataset.type) {
      project.classList.remove('invisible');
    } else{
      project.classList.add('invisible');
    }
    
  });
    projectContainer.classList.remove('anim-out');
  },300);

});