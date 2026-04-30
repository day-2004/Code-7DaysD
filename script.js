
// FADE SCROLL
const elements = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

elements.forEach(el => observer.observe(el));


// TYPEWRITER HERO
const bigText = document.querySelector('.hero .big');

if (bigText) {
    const text = bigText.innerHTML;
    bigText.innerHTML = "";

    let i = 0;

    function typeEffect() {
        if (i < text.length) {
            bigText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeEffect, 20);
        }
    }

    typeEffect();
}

document.addEventListener("DOMContentLoaded", () => {

    // CTA BOTÕES DE CLIQUE INICIO
    const ctaButtons = document.querySelectorAll("a.cta");

    ctaButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();

            const now = Date.now();
            const elapsed = now - startTime;
            const remaining = Math.max(0, duration - elapsed);

            const originalLink = btn.getAttribute("href");

            window.location.href = `${originalLink}?time=${remaining}`;
        });
    });

    // CTA FIXO, apesar de não ser BOTÃO DO FINAL
    // so aparece quando o usuário chega perto do final da página
    const ctaFixed = document.getElementById("ctaFixed");

    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const pageHeight = document.body.offsetHeight;

        if (scrollPosition > pageHeight - 200) {
            ctaFixed.classList.add("show");
        } else {
            ctaFixed.classList.remove("show");
        }
    });

});

//// TEMPO TOTAL (15 min)
const duration = 15 * 60 * 1000;

//// pega tempo salvo
let startTime = localStorage.getItem("startTime");

//// se não existir, cria
if (!startTime) {
    startTime = Date.now();
    localStorage.setItem("startTime", startTime);
}

const timerText = document.getElementById("timerText");

function updateTimer() {
    const now = Date.now();
    const elapsed = now - startTime;
    const remaining = duration - elapsed;

    if (remaining <= 0) {
        timerText.textContent = "Expired";
        return;
    }

    const minutes = Math.floor(remaining / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);

}

setInterval(updateTimer, 1000);
updateTimer();
const ctaButtons = document.querySelectorAll("a.cta");

ctaButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        const now = Date.now();
        const elapsed = now - startTime;
        const remaining = Math.max(0, duration - elapsed);

        const checkoutURL = "https://rebrand.ly/7day-discipline";

        window.location.href = `${checkoutURL}?time=${remaining}`;
    });
});