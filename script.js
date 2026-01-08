const menuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');

// Kun ikonia klikataan, lisätään/poistetaan "active" luokka
menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Suljetaan valikko, kun jotain linkkiä klikataan
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Suljetaan valikko, kun "ETUSIVU" klikataan
const mobiiliKoti = document.querySelector('.mobiili-koti');
if (mobiiliKoti) {
  mobiiliKoti.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
}

// Kun projektin kuvaa klikkaa, se aukeaa näytölle isompana
const modal = document.getElementById("kuva-modal");
const modalImg = document.getElementById("suurennettu-kuva");
const suljeSpan = document.getElementsByClassName("sulje")[0];

// Etsitään kaikki projektikuvat ja lisätään klikkausominaisuus
document.querySelectorAll('.projekti-kuva img').forEach(img => {
    img.style.cursor = "zoom-in"; // Näytetään suurennuslasihiiri
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

// Suljetaan, kun klikataan ruksia tai taustaa
modal.onclick = function() {
    modal.style.display = "none";
}