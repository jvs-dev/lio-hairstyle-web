let loadingSection = document.getElementById("loadingSection")

window.addEventListener("load", () => {
    setTimeout(() => {
        loadingSection.style.opacity = "0"
        setTimeout(() => {
            loadingSection.style.display = "none"
        }, 1000);
    }, 1000);
})