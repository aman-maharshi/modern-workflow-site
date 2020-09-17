class RevealOnScroll {
    constructor() {
        this.itemsToReveal = document.querySelectorAll(".feature-item")
        this.hideInitially()
        this.events()
        this.timer
    }
    hideInitially() {
        this.itemsToReveal.forEach(element => {
            element.classList.add("reveal-item")
        })
    }
    events() {
        window.addEventListener("scroll", () => {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                console.log("scroll funtion ran")
                this.itemsToReveal.forEach(item => {
                    this.calculateIfScrolledTo(item)
                })
            }, 20)
        })
    }

    calculateIfScrolledTo(element) {
        let scrollPercent = (element.getBoundingClientRect().top / window.innerHeight) * 100
        //console.log(scrollPercent)
        if (scrollPercent < 75) {
            element.classList.add("reveal-item--is-visible")
        } else {
            if (element.classList.contains("reveal-item--is-visible")) {
                element.classList.remove("reveal-item--is-visible")
            }
        }
    }
}

export default RevealOnScroll
