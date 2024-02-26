let a = document.querySelector(".menu");
a.addEventListener("click", function () {
  let b = document.querySelector(".menuitem");
  let x = document.querySelector(".home-content");
  let y = document.querySelector(".overlay");
  b.style.display ='block';
  b.style.right = "0";
  x.style.filter = "blur(50px)";
  y.style.filter = "blur(50px)";
});
let b = document.querySelector(".back");
b.addEventListener("click", function () {
  console.log("clicked");
  let b = document.querySelector(".menuitem");
  let x = document.querySelector(".home-content");
  let y = document.querySelector(".overlay");
  b.style.right = "-1000px";
  b.style.display = 'none';
  x.style.filter = "blur(0px)";
  y.style.filter = "blur(0px)";
});

let c = document.querySelector(".logo");
c.addEventListener("click", function () {
  window.open("https://baja.nitk.ac.in/#home", "_self");
});

let d = document.querySelector(".home");
d.addEventListener("click", function () {
  window.open("https://baja.nitk.ac.in/#home", "_self");
});
document.querySelector(".team").addEventListener("click", function () {
  window.open("https://baja.nitk.ac.in/#team", "_self");
});
document.querySelector(".contact").addEventListener("click", function () {
  window.open("https://baja.nitk.ac.in/#contact", "_blank");
});
document.querySelector(".gallery").addEventListener("click", function () {
  window.open("https://baja.nitk.ac.in/#achievements", "_blank");
});
document.querySelector(".fb").addEventListener("click", function () {
  window.open("https://www.facebook.com/BajaNITKRacing/", "_self");
});
document.querySelector(".yt").addEventListener("click", function () {
  window.open("https://www.youtube.com/channel/UCJ3qe8kkTonGh1KTXCw-xGQ/featured", "_self");
});
document.querySelector(".insta").addEventListener("click", function () {
  window.open("https://www.instagram.com/bajanitkracing/", "_self");
});
document.querySelector(".ld").addEventListener("click", function () {
  window.open("https://www.linkedin.com/company/baja-nitk-racing/", "_self");
});

document.querySelector('.sub').addEventListener("click", function () {
  window.open("https://baja.nitk.ac.in/team/", "_self");
});
