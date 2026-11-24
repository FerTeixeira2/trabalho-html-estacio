document.addEventListener("DOMContentLoaded", () => {
    const copyright = document.querySelector("footer p");

    if (copyright) {
        copyright.textContent = copyright.textContent.replace(/\b\d{4}\b/, new Date().getFullYear());
    }
});