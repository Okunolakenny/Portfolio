let preloader = document.querySelector(".preloader");
var bar1 = document.getElementById('bar1');
var time1 = document.getElementById('time1');
var links1 = document.getElementById('links1');


bar1.onclick = function () {
    bar1.style.transform = "scale(0)";
    time1.style.transform = "scale(1)";
    links1.style.transform = "scale(1)";

}
time1.onclick = function () {
    time1.style.transform = "scale(0)";
    bar1.style.transform = "scale(1)";
    links1.style.transform = "scale(0)"
}


AOS.init({
    offset:50,
    duration:1000

});  

// var load = document.getElementById("loading");
// function loader() {
//     load.style.display = "none";
    
// }

window.addEventListener("load", function () {
    preloader.style.display = "none";
  });
  
  window.addEventListener("loadstart", function () {
    preloader.style.display = "block";

  });
  setTimeout(() => {
    window.removeEventListener("loadstart")
  }, 10000)
