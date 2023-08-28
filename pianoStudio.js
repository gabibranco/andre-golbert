window.onload = function() {loadFunction()};
window.onscroll = function() {scrollFunction()};

function loadFunction() {
  document.getElementById("navbar").style.display = "flex";
  document.getElementById("home").style.color = "#3A405A";
}

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.backgroundColor = "#3A405A";
    document.getElementById("home").style.color = "#FFF7F2";
  } else {
    document.getElementById("home").style.color = "#3A405A";
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
}