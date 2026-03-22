document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".page-one-menu-item, .side-menu a");

    menuLinks.forEach((link) => {
        const initialSize = parseFloat(window.getComputedStyle(link).fontSize);
        const baseSize = Number.isNaN(initialSize) ? 16 : initialSize;
        link.style.transition = "font-size 0.15s ease";

        link.addEventListener("mouseenter", () => {
            link.style.fontSize = `${baseSize + 5}px`;
        });

        link.addEventListener("mouseleave", () => {
            link.style.fontSize = `${baseSize}px`;
        });

        link.addEventListener("focus", () => {
            link.style.fontSize = `${baseSize + 5}px`;
        });

        link.addEventListener("blur", () => {
            link.style.fontSize = `${baseSize}px`;
        });
    });
});
