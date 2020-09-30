import "../styles/styles.css"
import "lazysizes"
import MobileMenu from "./modules/MobileMenu"
import RevealOnScroll from "./modules/RevealOnScroll"
import StickyHeader from "./modules/StickyHeader"
import HighlightNavOnScroll from "./modules/HighlightNavOnScroll"
import Modal from "./modules/Modal"

if (module.hot) {
    module.hot.accept()
}

new MobileMenu()
new RevealOnScroll(".feature-item")
new RevealOnScroll(".testimonial")
new StickyHeader()
new HighlightNavOnScroll()
new Modal()
