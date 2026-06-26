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
  pageTransition("info.html");
}

function goServices() {
  pageTransition("https://www.shopier.com/kraxmarket");
}

/* 🔥 ORTAK ANİMASYON */
function pageTransition(url) {

  document.body.style.transition = "0.6s ease";
  document.body.style.opacity = "0";
  document.body.style.filter = "blur(25px)";
  document.body.style.transform = "scale(1.1)";

  setTimeout(() => {
    window.location.href = url;
  }, 500);
}
