document.addEventListener("DOMContentLoaded", () => {
    setupScrollToTopButton();
    setupVideoUnmuteButton();
    setupBurgerMenu();
});

function setupScrollToTopButton() {
    const topButton = document.getElementById('top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            topButton.style.display = 'block';
        } else {
            topButton.style.display = 'none';
        }
    });

    topButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function setupVideoUnmuteButton() {
    const video = document.getElementById("bg-video");
    const unmuteBtn = document.getElementById("unmute-btn");

    unmuteBtn.style.display = "block";

    unmuteBtn.addEventListener("click", () => {
        if (video.muted) {
            video.muted = false;
            unmuteBtn.textContent = "🔊";
        } else {
            video.muted = true;
            unmuteBtn.textContent = "🔇";
        }
    });
}

function setupBurgerMenu() {
    const burger = document.querySelector('.header-burger');
    const nav = document.querySelector('.header__nav');
    const links = document.querySelectorAll('.header__link');

    burger.addEventListener('click', () => {
        nav.classList.toggle('open');
        toggleBodyOverflow(nav.classList.contains('open'));
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            toggleBodyOverflow(false);
        });
    });
}

function toggleBodyOverflow(isOpen) {
    if (isOpen) {
        document.body.style.overflowY = 'hidden';
    } else {
        document.body.style.overflowY = 'visible';
    }
}