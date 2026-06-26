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

/* 🔥 ORTAK ANİMASYON (DÜZELTİLMİŞ) */
function pageTransition(url) {

  // animasyonun görünmesi için önce state değiştir
  document.body.style.transition = "0.6s ease";
  document.body.style.willChange = "transform, opacity, filter";

  document.body.style.opacity = "0";
  document.body.style.filter = "blur(25px)";
  document.body.style.transform = "scale(1.05)";

  // animasyonun kesin görünmesi için küçük gecikme
  setTimeout(() => {
    window.location.href = url;
  }, 600);
}
