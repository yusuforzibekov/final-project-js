window.addEventListener('scroll', () => {
    const topButton = document.getElementById('top');
    if (window.scrollY > 100) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
});

document.getElementById('top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("bg-video");
    const unmuteBtn = document.getElementById("unmute-btn");

    // Show the unmute button
    unmuteBtn.style.display = "block";

    // Unmute the video on button click
    unmuteBtn.addEventListener("click", () => {
        if (video.muted) {
            video.muted = false;
            unmuteBtn.textContent = "🔊"; // Change icon to unmute icon
            unmuteBtn.style.display = "block"; // Hide the button after unmuting
        } else {
            video.muted = true;
            unmuteBtn.textContent = "🔇"; // Change icon to mute icon
        }
    });
});