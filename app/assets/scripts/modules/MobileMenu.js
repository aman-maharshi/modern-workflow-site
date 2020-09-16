class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector(".site-header__menu-icon")
        this.mobileMenu = document.querySelector(".site-header__menu-content")
        this.events()
    }
    events() {
        // an arrow function doesn't change the value of the 'this' keyword
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
    }
    toggleTheMenu() {
        this.mobileMenu.classList.toggle("toggle-menu")
        if (this.menuIcon.textContent == "☰") {
            this.menuIcon.textContent = "✕"
        } else {
            this.menuIcon.textContent = "☰"
        }
    }
}

export default MobileMenu
