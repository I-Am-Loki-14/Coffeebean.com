const menubar = document.getElementById('menu-bar');
const navlist = document.getElementById('nav-list');

menubar.addEventListener('click',()=>{
    navlist.classList.toggle('show');
    if (navlist.classList.contains('show')) {
        menubar.src = "./img/close.svg";
    } else {
        menubar.src="./img/Menu.svg";
    }

    
      
})