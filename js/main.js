/* =========================================================
   POWERNEST ELECTRIC
   GENERAL WEBSITE JAVASCRIPT
========================================================= */

/* =========================================================
   MOBILE MENU
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            const open =
                navLinks.classList.contains("active");

            menuToggle.textContent = open ? "✕" : "☰";

            menuToggle.setAttribute(
                "aria-expanded",
                String(open)
            );

        });

        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

                menuToggle.textContent = "☰";

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });
    }


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    const backToTop =
        document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 500) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });

    }


    /* =====================================================
       CONTACT / QUOTE FORM
    ===================================================== */

    const quoteForm =
        document.getElementById("quoteForm");

    if (quoteForm) {

        quoteForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const service =
                document.getElementById("service").value;

            const location =
                document.getElementById("location").value.trim();

            const message =
                document.getElementById("message").value.trim();

            const whatsappMessage =
`Hello PowerNest Electric,

I would like to request a quote.

*Customer Information*

Name: ${name}

Phone / WhatsApp: ${phone}

Email: ${email || "Not provided"}

Type of Electrical Work: ${service}

Location: ${location}

Description of the Work:
${message}

Thank you.`;

            const whatsappNumber =
                "231880947513";

            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(whatsappMessage);

            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );

        });

    }


    /* =====================================================
       IMAGE MODAL
    ===================================================== */

    setupImageModal();

});


/* =========================================================
   IMAGE MODAL FUNCTIONS
========================================================= */

function openModal(element) {

    if (!element) {
        return;
    }

    const image =
        element.querySelector("img");

    const modal =
        document.getElementById("imageModal");

    const modalImage =
        document.getElementById("modalImage");

    if (!image || !modal || !modalImage) {
        return;
    }

    modalImage.src = image.src;

    modalImage.alt =
        image.alt ||
        "PowerNest Electric image";

    modal.classList.add("show");

    document.body.classList.add("modal-open");
}


function closeModal() {

    const modal =
        document.getElementById("imageModal");

    const modalImage =
        document.getElementById("modalImage");

    if (!modal) {
        return;
    }

    modal.classList.remove("show");

    document.body.classList.remove("modal-open");

    if (modalImage) {
        modalImage.src = "";
    }
}


function backgroundClose(event) {

    if (event.target.id === "imageModal") {
        closeModal();
    }
}


function setupImageModal() {

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closeModal();
        }

    });

}


/* =========================================================
   PROJECT FILTER
========================================================= */

function setupProjectFilter() {

    const filterButtons =
        document.querySelectorAll(".filter-button");

    const projectItems =
        document.querySelectorAll(
            "#projectGallery .gallery-item"
        );

    const noProjectsMessage =
        document.getElementById("noProjectsMessage");

    if (!filterButtons.length || !projectItems.length) {
        return;
    }

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const filter =
                button.getAttribute("data-filter");

            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });

            button.classList.add("active");

            let visibleCount = 0;

            projectItems.forEach(function (item) {

                const category =
                    item.getAttribute("data-category");

                if (
                    filter === "all" ||
                    category === filter
                ) {

                    item.classList.remove("hidden");

                    visibleCount++;

                } else {

                    item.classList.add("hidden");

                }

            });

            if (noProjectsMessage) {

                noProjectsMessage.style.display =
                    visibleCount === 0
                        ? "block"
                        : "none";

            }

        });

    });

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const currentPage =
        window.location.pathname.split("/").pop() ||
        "index.html";

    document
        .querySelectorAll(".nav-links a")
        .forEach(function (link) {

            const href =
                link.getAttribute("href");

            if (
                href === currentPage ||
                (
                    currentPage === "" &&
                    href === "index.html"
                )
            ) {

                link.classList.add("active");

            }

        });

    setupProjectFilter();

});