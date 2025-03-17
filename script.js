document.addEventListener("DOMContentLoaded", function () {
    // VALIKKO
    const hampurilaiskuvake = document.querySelector(".hampurilaiskuvake");
    const linkit = document.querySelector("nav ul");

    // Klikkaamalla kuvaketta avataan tai suljetaan valikko
    hampurilaiskuvake.addEventListener("click", function () {
        linkit.classList.toggle("show");
    });

    // Klikkaamalla <ul> suljetaan valikko
    linkit.addEventListener("click", function () {
        linkit.classList.remove("show");
    });

    // Klikkaamalla muualle kuin valikkoon, valikko sulkeutuu
    document.addEventListener("click", function (event) {
        if (!linkit.contains(event.target) && !hampurilaiskuvake.contains(event.target)) {
            linkit.classList.remove("show");
        }
    });

    // MINUSTA: LISÄTIETOJA
    const lueLisaaPainike = document.getElementById("lueLisaaPainike");
    const lisatiedot = document.getElementById("lisatiedot");

    // Jos piilossa-luokkaa ei ole, se annetaan, ja jos piilossa-luokka on, se poistetaan
    lueLisaaPainike.addEventListener("click", function () {
        lisatiedot.classList.toggle("piilossa");
    });

    // PROJEKTIT: MODAL ELI POP UP -IKKUNA
    const projektit = document.querySelectorAll(".projekti");
    const modaalit = document.querySelectorAll(".modal");
    const suljeNapit = document.querySelectorAll(".close");

    // Avaa oikea modal-ikkuna
    projektit.forEach(projekti => {
        projekti.addEventListener("click", function () {
            const modalId = this.getAttribute("data-modal"); // Haetaan modalin id
            document.getElementById(modalId).style.display = "block";
        });
    });

    // Sulje modal-ikkuna ruksista
    suljeNapit.forEach(nappi => {
        nappi.addEventListener("click", function () {
            this.closest(".modal").style.display = "none";
        });
    });

    // Sulje modal klikkaamalla sen ulkopuolelle
    window.addEventListener("click", function (event) {
        modaalit.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });

    // KOULUTUS: LISÄTIETOJA
    const lueLisaaKoulutuksesta = document.getElementById("lueLisaaKoulutuksesta");

    // Jos piilossa-luokkaa ei ole, se annetaan, ja jos piilossa-luokka on, se poistetaan
    document.getElementById("lueLisaaKoulutuksesta").addEventListener("click", function () {
        document.querySelectorAll(".lisaKoulu").forEach(elementti => {
            if (elementti.classList.contains("piilossa")) {
                elementti.classList.replace("piilossa", "degree");
                lueLisaaKoulutuksesta.textContent = "Näytä vähemmän"
            } else {
                elementti.classList.replace("degree", "piilossa");
                lueLisaaKoulutuksesta.textContent = "Näytä lisää"
            }
        });
    });

    // TYÖKOKEMUSS: LISÄTIETOJA
    const lueLisaaTyokokemuksesta = document.getElementById("lueLisaaTyokokemuksesta");

    // Jos piilossa-luokkaa ei ole, se annetaan, ja jos piilossa-luokka on, se poistetaan
    document.getElementById("lueLisaaTyokokemuksesta").addEventListener("click", function () {
        document.querySelectorAll(".lisatyo").forEach(elementti => {
            if (elementti.classList.contains("piilossa")) {
                elementti.classList.replace("piilossa", "degree");
                lueLisaaTyokokemuksesta.textContent = "Näytä vähemmän"
            } else {
                elementti.classList.replace("degree", "piilossa");
                lueLisaaTyokokemuksesta.textContent = "Näytä lisää"
            }
        });
    });
});