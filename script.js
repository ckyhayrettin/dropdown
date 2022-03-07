
// document.getElementById("menu").addEventListener('click', openMenu);

// function openMenu(){

//     document.getElementById("dropdown").classList.toggle("active");
// }

const menu = document.getElementById('menu');
const dropdown = document.getElementById('dropdown');


menu.addEventListener('mouseenter', openMenu);
menu.addEventListener('mouseleave', closeMenu);

function openMenu(){
    menu.innerHTML(dropdown)
}

function closeMenu(){

}