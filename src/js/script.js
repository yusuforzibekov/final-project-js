document.addEventListener("DOMContentLoaded", () => {
    setupScrollToTopButton();
    setupVideoUnmuteButton();
    setupBurgerMenu();
    sortFoods();
    setActiveLinkWithHover();
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

function sortFoods() {
    const foodLinks = document.querySelectorAll('.food__link');
    const foodCards = document.querySelectorAll('.food__card');

    foodLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();

            const category = link.getAttribute('data-type');

            foodCards.forEach(card => {
                const cardType = card.getAttribute('data-type');

                if (category == 'All' || cardType === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function setActiveLinkWithHover() {
    // Select all food links
    const foodLinks = document.querySelectorAll('.food__link');

    // Helper function to set the active class
    const setActiveClass = (link) => {
        // Remove 'active' class from all links
        foodLinks.forEach(l => l.classList.remove('active'));
        // Add 'active' class to the hovered or clicked link
        link.classList.add('active');
    };

    foodLinks.forEach(link => {
        // Add 'mouseover' event for hover
        link.addEventListener('mouseover', () => {
            setActiveClass(link);
        });

        // Add 'click' event for clicking
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            setActiveClass(link);
        });
    });
}