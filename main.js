let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mount1  = document.getElementById('mount1');
let mount2 = document.getElementById('mount2');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let logo = document.querySelector('.logo1');

window.onscroll = function (){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mount1.style.top = value * 2 + 'px';
    mount2.style.top = value * 1.5+ 'px';
    river.style.top = value  + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    logo.style.fontSize = value + 'px';
    if (scrollY >= 67){
        logo.style.fontSize = 67 + 'px';
        logo.style.position = 'fixed';
        if (scrollY >=462.5){
            logo.style.display = 'none';

        }else{
            logo.style.display = 'block';

        }
    }
}