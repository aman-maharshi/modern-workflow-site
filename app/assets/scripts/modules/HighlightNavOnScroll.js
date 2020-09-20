import throttle from "lodash/throttle"
import debounce from "lodash/debounce"

class HighlightNavOnScroll {
    constructor() {
        this.pageSections = document.querySelectorAll(".page-section")
        this.browserHeight = window.innerHeight
        this.previousScrollY = window.screenY
        this.events()
    }

    events() {
        window.addEventListener(
            "scroll",
            throttle(() => {
                this.runOnScroll()
            }, 300)
        )
        window.addEventListener(
            "resize",
            debounce(() => {
                this.browserHeight = window.innerHeight
            }, 300)
        )
        window.addEventListener(
            "scroll",
            throttle(() => {
                this.reset()
            }, 300)
        )
    }

    runOnScroll() {
        this.determineScrollDirection()
        this.pageSections.forEach(element => {
            this.calcSection(element)
        })
    }

    // calculating if the current .page-section element is scrolled to
    calcSection(el) {
        // if the top edge of section has entered the view port and the bottom edge of the section has not left the viewport
        if (window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
            let scrollPercent = (el.getBoundingClientRect().top / this.browserHeight) * 100
            if ((scrollPercent < 18 && scrollPercent > -0.1 && this.scrollDirection == "down") || (scrollPercent < 33 && this.scrollDirection == "up")) {
                let matchingLink = el.getAttribute("data-matching-link")
                //console.log(matchingLink)
                document.querySelectorAll(`.primary-nav a:not(${matchingLink})`).forEach(el => {
                    el.classList.remove("is-current-link")
                })
                document.querySelector(matchingLink).classList.add("is-current-link")
            }
        }
    }

    determineScrollDirection() {
        if (window.scrollY > this.previousScrollY) {
            this.scrollDirection = "down"
        } else {
            this.scrollDirection = "up"
        }
        this.previousScrollY = window.scrollY
    }

    reset() {
        if (window.scrollY == 0) {
            document.querySelector("#our-beginning-nav-link").classList.remove("is-current-link")
        }
    }
}

export default HighlightNavOnScroll
