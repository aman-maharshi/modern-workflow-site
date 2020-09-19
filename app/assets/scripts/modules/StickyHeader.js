import throttle from "lodash/throttle"

class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector(".site-header")
        this.events()
    }

    events() {
        window.addEventListener("scroll", throttle(() => this.runOnScroll(), 300))
    }

    runOnScroll() {
        if (window.scrollY > 60) {
            this.siteHeader.classList.add("site-header--dark-bg")
        } else {
            this.siteHeader.classList.remove("site-header--dark-bg")
        }
    }
}

export default StickyHeader
