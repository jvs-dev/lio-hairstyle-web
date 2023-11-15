let burger = document.getElementById("burger")
let mobileNav_a = document.querySelectorAll(".mobileNav__a")

mobileNav_a.forEach(element => {
    element.onclick = () => {
        let mobileNav = document.getElementById("mobileNav")
        let header = document.getElementById("header")
        header.style.background = ""
        header.style.boxShadow = ""
        mobileNav.classList.remove('active')
        burger.checked = false
    }
});

burger.onclick = function () {
    let mobileNav = document.getElementById("mobileNav")
    let header = document.getElementById("header")
    if (mobileNav.classList.contains('active') == false) {
        header.style.background = "transparent"
        header.style.boxShadow = "none"
        mobileNav.style.display = "flex"
        setTimeout(() => {
            mobileNav.classList.add('active')
        }, 1);
    } else {
        header.style.background = ""
        header.style.boxShadow = ""
        mobileNav.classList.remove('active')
    }
}