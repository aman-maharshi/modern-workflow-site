import "../styles/styles.css"

if (module.hot) {
    module.hot.accept()
}

// custom mobile menu toggle functionality
const toggleBtn = document.querySelector(".site-header__menu-icon")
const mobileMenu = document.querySelector(".site-header__menu-content")

toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("toggle-menu")
})
