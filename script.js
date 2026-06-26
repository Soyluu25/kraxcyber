window.onload = () => {

  const intro = document.getElementById("intro");

  // body loaded efekti
  setTimeout(() => {
    document.body.classList.add("loaded"); 
  }, 120);

  // intro varsa kapat
  if (intro) {
    setTimeout(() => {
      intro.classList.add("hide");
    }, 3500);
  }
};

/* NAV */

function goInfo() {
  document.body.style.transition = "0.6s ease";
  document.body.style.opacity = "0";
  document.body.style.filter = "blur(20px)";

  setTimeout(() => {
    window.location.href = "info.html";
  }, 500);
}

function goServices() {
  window.location.href = "https://www.shopier.com/kraxmarket";
}
