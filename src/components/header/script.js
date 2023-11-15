let scrollY = window.pageYOffset;
let header = document.getElementById("header")

window.addEventListener('scroll', function (e) {
    scrollY = window.pageYOffset;
    if (scrollY > 100) {
        header.classList.add("active")
    } else {
        header.classList.remove("active")
    }
})

