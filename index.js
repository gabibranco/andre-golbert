window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.display = "flex";
    document.getElementById("navbar").style.backgroundColor = "#3A405A";
  } else {
    document.getElementById("navbar").style.display = "none";
  }
}