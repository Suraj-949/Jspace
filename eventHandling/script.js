const cursor = document.querySelector(".cursor");
const eyes = document.querySelectorAll(".eye");

window.addEventListener("mousemove", (e) => {

    cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
    cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;

    eyes.forEach((eye) => {

        const pupil = eye.querySelector(".pupil");
        const rect = eye.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;

        const angle = Math.atan2(dy, dx);

        const radius = 15;

        const moveX = Math.cos(angle) * radius;
        const moveY = Math.sin(angle) * radius;

        pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;

    });

}); 