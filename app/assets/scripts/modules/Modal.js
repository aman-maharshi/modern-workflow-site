class Modal {
    constructor() {
        this.modalHTML = `
        <!-- MODAL  -->
        <div class="modal">
            <div class="modal__inner">
                <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon" /> Get in <strong>Touch</strong></h2>
                <div class="wrapper wrapper--narrow">
                    <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
                </div>

                <div class="social-icons">
                    <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"/></a>
                    <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"/></a>
                    <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"/></a>
                    <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"/></a>
                </div>
            </div>
            <div class="modal__close">X</div>
        </div>`
        this.footer = document.querySelector(".footer")
        this.injectHTML()
        this.modal = document.querySelector(".modal")
        this.openModal()
        this.closeModal()
        this.closeModalEsc()
    }

    injectHTML() {
        this.footer.insertAdjacentHTML("afterend", this.modalHTML)
    }

    openModal() {
        this.openModalBtn = document.querySelectorAll(".open-modal")

        this.openModalBtn.forEach(item => {
            item.addEventListener("click", e => {
                e.preventDefault()
                this.modal.classList.add("show-modal")
            })
        })
    }

    closeModal() {
        document.querySelector(".modal__close").addEventListener("click", () => {
            this.modal.classList.remove("show-modal")
        })
    }

    closeModalEsc() {
        document.addEventListener("keyup", e => {
            if (e.keyCode == 27) {
                if (this.modal.classList.contains("show-modal")) {
                    this.modal.classList.remove("show-modal")
                }
            }
        })
    }
}

export default Modal
