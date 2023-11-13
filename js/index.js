document.addEventListener('DOMContentLoaded',()=>{
    const header=document.querySelector('.header');
    const menu=document.querySelector('.menus');
    menu.onclick= ()=>{
       header.classList.toggle('header-active')
    }
    
})

