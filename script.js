// =====================================
// ANURAG RAJ PORTFOLIO JAVASCRIPT
// =====================================


// Page loaded
document.addEventListener("DOMContentLoaded", function () {

    console.log("Anurag Raj Portfolio Loaded");


    // =================================
    // Smooth navigation
    // =================================

    const links = document.querySelectorAll(
        ".navbar a[href^='#']"
    );


    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const targetId =
                this.getAttribute("href");

            const target =
                document.querySelector(targetId);


            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });



    // =================================
    // Card animation
    // =================================

    const cards =
        document.querySelectorAll(".card");


    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    cards.forEach(function (card) {

        observer.observe(card);

    });

});