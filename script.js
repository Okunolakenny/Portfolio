var home = document.getElementById('home');
var services = document.getElementById('services');
var about = document.getElementById('about');
var contact = document.getElementById('contact');
var blog = document.getElementById('blog');
var bar = document.getElementById('bar');
var time = document.getElementById('time');
var links = document.getElementById('links');






window.onload = function(){
    home.classList.add('after')
}

bar.onclick = function(){
    bar.style.transform="scale(0)";
    time.style.transform="scale(1)";
    links.style.transform = "scale(1)";

}
time.onclick = function(){
    time.style.transform="scale(0)";
    bar.style.transform="scale(1)";
    links.style.transform = "scale(0)";

}
home.onclick = function () {
    home.classList.add('after');
    services.classList.remove('after');
    about.classList.remove('after');
    contact.classList.remove('after');
    blog.classList.remove('after');

}

services.onclick = function () {
    home.classList.remove('after');
    services.classList.add('after');
    about.classList.remove('after');
    contact.classList.remove('after');
    blog.classList.remove('after');

}

about.onclick = function () {
    about.classList.add('after');
    home.classList.remove('after');
    services.classList.remove('after');
    contact.classList.remove('after');
    blog.classList.remove('after');

}

contact.onclick = function () {
    contact.classList.add('after');
    home.classList.remove('after');
    services.classList.remove('after');
    about.classList.remove('after');
    blog.classList.remove('after');

}

blog.onclick = function () {
    home.classList.remove('after');
    services.classList.remove('after');
    about.classList.remove('after');
    contact.classList.remove('after');
    blog.classList.add('after');

}