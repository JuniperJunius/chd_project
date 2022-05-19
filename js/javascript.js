hamburger = document.querySelector(".hamburger")
navbar = document.querySelector(".navbar")
navlist = document.querySelector(".navlist")
slidingani = document.querySelector(".navslide")
bar1 = document.querySelector(".bar1")
bar2 = document.querySelector(".bar2")
bar3 = document.querySelector(".bar3")
var accordianlink = document.querySelector(".accordianlink")
var answer = document.querySelector(".answer")
var answerclickone = document.querySelector(".answerclickone")
var answerclicktwo = document.querySelector(".answerclicktwo")
var username = document.querySelector(".username")
var password = document.querySelector(".password")
var navcf = document.querySelector(".navcf")
var pagefour = document.querySelector(".pagefour")
var navli = document.querySelector(".navli")
var pagethree = document.querySelector(".pagethree")
var navlist = document.querySelector(".navlist")
var mit = document.querySelector(".mit")
var textclass = document.querySelector(".textclass")
var checkbox = document.querySelector('#checkbox')
function onhamburgerclick() {
  navbar.classList.toggle('hnav-resp');
  navbar.classList.toggle('navslide');
  navlist.classList.toggle('vclass-resp');
  bar1.classList.toggle('barone');
  bar2.classList.toggle("bartwo");
  bar3.classList.toggle("barthree");
}

function onloginclick() {
  if (username.value == "abc@gmail.com" && password.value == "1234") {
    alert("You have successfully logged in")
    navcf.style.display = "block";
    pagefour.style.display = "block";
    navli.style.display = "none";
    pagethree.style.display = "none";
  }
  else {
    alert("Please enter username and password")
  }
}

function onmitclick() {
  if (textclass.value == "") {
    alert("PLease mention your problem below")
  }
  else {
    alert("Thank You. We will revert back.")
    location.reload();
  }
}

function whenchecked() {
  if (password.type == "password") {
    password.type = "text"
  }
  else (
    password.type = "password"
  )
}
var btncf = document.querySelector("btncf")
function mainonc() {
  alert("Please Log In First")
  window.scrollTo(0, 2350)
}
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
