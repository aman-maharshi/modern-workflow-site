import "../styles/styles.css"
import MobileMenu from "./modules/MobileMenu"
import RevealOnScroll from "./modules/RevealOnScroll"
import StickyHeader from "./modules/StickyHeader"

if (module.hot) {
    module.hot.accept()
}

new MobileMenu()
new RevealOnScroll(".feature-item")
new RevealOnScroll(".testimonial")
new StickyHeader()

/* 
// custom mobile menu toggle functionality
const toggleBtn = document.querySelector(".site-header__menu-icon")
const mobileMenu = document.querySelector(".site-header__menu-content")

toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("toggle-menu")
})

*/
