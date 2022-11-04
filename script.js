var home = document.getElementsByClassName('home');
var services = document.getElementsByClassName('services');
var about = document.getElementsByClassName('about');
var contact = document.getElementsByClassName('contact');
var blog = document.getElementsByClassName('blog');
var bar = document.getElementById('bar');
var time = document.getElementById('time');
var links = document.getElementById('links');
var mycv = document.getElementById('cv');
var resume = document.getElementById('resume');
var closecv = document.getElementById('closecv');
var blurs = document.getElementsByClassName('blur');
var header = document.querySelector('header');










// window.onload = function(){
//     home.classList.add('after')
// }
window.addEventListener('scroll', ()=>{
    header.classList.toggle('active', window.scrollY >= 500);
})
resume.onclick = function () {
    mycv.style.transform = "scale(1)";
    // blurs.style.display = "block";

}
closecv.onclick = function () {
    mycv.style.transform = "scale(0)";
}

bar.onclick = function () {
    bar.style.transform = "scale(0)";
    time.style.transform = "scale(1)";
    links.style.transform = "scale(1)";

}
time.onclick = function () {
    time.style.transform = "scale(0)";
    bar.style.transform = "scale(1)";
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



var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    //  slidesPerView: 'auto',
    loop: true,
    spaceBetween: 30,
    //  centeredSlides: true,

    autoplay: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});








AOS.init({
    offset:200,
    duration:500

});  
