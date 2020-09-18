import throttle from "lodash/throttle"
import debounce from "lodash/debounce"

class RevealOnScroll {
    constructor(applyToElements) {
        this.itemsToReveal = document.querySelectorAll(applyToElements)
        this.browserHeight = window.innerHeight
        this.hideInitially()
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
        this.events()
    }
    events() {
        window.addEventListener("scroll", this.scrollThrottle)
        window.addEventListener(
            "resize",
            debounce(() => {
                // console.log("resize ran")
                this.browserHeight = window.innerHeight
            }, 300)
        )
    }

    hideInitially() {
        this.itemsToReveal.forEach(element => {
            element.classList.add("reveal-item")
            element.isRevealed = false
        })
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true
    }

    calcCaller() {
        // console.log("scroll funtion ran")
        this.itemsToReveal.forEach(item => {
            if (item.isRevealed == false) {
                this.calculateIfScrolledTo(item)
            }
        })
    }

    calculateIfScrolledTo(element) {
        // calculate only once we reach the element
        if (window.scrollY + this.browserHeight > element.offsetTop) {
            // console.log("element was calculated")
            let scrollPercent = (element.getBoundingClientRect().top / this.browserHeight) * 100
            if (scrollPercent < 75) {
                element.classList.add("reveal-item--is-visible")
                element.isRevealed = true
                if (element.isLastItem) {
                    window.removeEventListener("scroll", this.scrollThrottle)
                }
            }
        }
    }
}

export default RevealOnScroll
