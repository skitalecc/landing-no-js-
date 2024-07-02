const menuOverlay = document.getElementById('menu__overlay');
const menu = document.getElementById('menu');
const burger = document.getElementById('burger');

burger.addEventListener('click', ()=> {
if(!menu.classList.contains('active')){
menu.classList.add('active')}
})

menuOverlay.addEventListener('click', ()=> {
menu.classList.remove('active');
})
