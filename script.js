let preloader = document.querySelector(".preloader");
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
var blurs = document.querySelector('#index');
var header = document.querySelector('header');
var skill = document.getElementById('skill');
var skills = document.getElementById('skills');
var edu = document.getElementById('edu');
var edus = document.getElementById('edus');
var exp = document.getElementById('exp');
var exps = document.getElementById('exps');














// window.onload = function(){
//     home.classList.add('after')
// }
window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY >= 1400);
})
resume.onclick = function () {
    mycv.style.transform = "scale(1)";
    blurs.classList.add('active')
    header.classList.add('active-two')

}
closecv.onclick = function () {
    mycv.style.transform = "scale(0)";
    blurs.classList.remove('active')
    header.classList.remove('active-two');

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
    home.classList.remove('after-links');
    services.classList.add('after-links');
    about.classList.remove('after-links');
    contact.classList.remove('after-links');
    blog.classList.remove('after-links');

}

about.onclick = function () {
    about.classList.add('after-links');
    home.classList.remove('after-links');
    services.classList.remove('after-links');
    contact.classList.remove('after-links');
    blog.classList.remove('after-links');

}

contact.onclick = function () {
    contact.classList.add('after-links');
    home.classList.remove('after-links');
    services.classList.remove('after-lnks');
    about.classList.remove('after-links');
    blog.classList.remove('after-links');

}

blog.onclick = function () {
    home.classList.remove('after-links');
    services.classList.remove('after-links');
    about.classList.remove('after-links');
    contact.classList.remove('after-links');
    blog.classList.add('after-links');

}

window.onload = function () {
    skill.classList.add('active');
    // skills.style.transform = "scale(1)"


}
skill.onclick = function () {
    skill.classList.add('active');
    edu.classList.remove('active');
    exp.classList.remove('active');
    skills.style.transform = "scale(1)"
    edus.style.transform = "scale(0)"
    exps.style.transform = "scale(0)"
}


edu.onclick = function () {
    edu.classList.add('active');
    skill.classList.remove('active');
    exp.classList.remove('active');
    edus.style.transform = "scale(1)"
    exps.style.transform = "scale(0)"
    skills.style.transform = "scale(0)"

}

exp.onclick = function () {
    exp.classList.add('active');
    edu.classList.remove('active');
    skill.classList.remove('active');
    exps.style.transform = "scale(1)"
    edus.style.transform = "scale(0)"
    skills.style.transform = "scale(0)"
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
    offset: 50,
    duration: 1000

});


var year = new Date().getFullYear();

document.querySelector('#footer-date').innerHTML = year;


window.addEventListener("load", function () {
    preloader.style.display = "none";
});

window.addEventListener("loadstart", function () {
    preloader.style.display = "block";

});
setTimeout(() => {
    window.removeEventListener("loadstart")
}, 60000)

