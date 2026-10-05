
/* =====================================================
   WELCOME SCREEN
===================================================== */

const welcomeScreen =
    document.getElementById("welcomeScreen");

const mainWebsite =
    document.getElementById("mainWebsite");

const startButton =
    document.getElementById("startButton");


startButton.addEventListener("click", function () {

    welcomeScreen.classList.add("hide");

    setTimeout(function () {

        mainWebsite.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 400);

});


/* =====================================================
   DARK MODE
===================================================== */

const themeButton =
    document.getElementById("themeButton");


const savedTheme =
    localStorage.getItem("divya-web-theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeButton.textContent = "☀";

}


themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        localStorage.setItem(
            "divya-web-theme",
            "dark"
        );

        themeButton.textContent = "☀";

    } else {

        localStorage.setItem(
            "divya-web-theme",
            "light"
        );

        themeButton.textContent = "☾";

    }

});


/* =====================================================
   SMOOTH NAVIGATION
===================================================== */

const navigationLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (targetId === "#") {
            return;
        }


        const target =
            document.querySelector(targetId);


        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".project-card, .practice-card, .explore-card"
    );


revealElements.forEach(function (element) {

    element.classList.add("reveal");

});


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(function (element) {

    observer.observe(element);

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    function () {

        let currentSection = "";


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navItems.forEach(function (item) {

            item.style.color = "";

            if (
                item.getAttribute("href") ===
                "#" + currentSection
            ) {

                item.style.color =
                    "#075e54";

            }

        });

    }
);


/* =====================================================
   LITTLE HOVER SOUND-LIKE FEEDBACK
   (VISUAL ONLY)
===================================================== */

const cards =
    document.querySelectorAll(
        ".project-card, .practice-card, .explore-card"
    );


cards.forEach(function (card) {

    card.addEventListener(
        "mouseenter",
        function () {

            card.style.transition =
                "transform .35s ease, box-shadow .35s ease";

        }
    );

});


/* =====================================================
   CONSOLE MESSAGE
===================================================== */

console.log(
    "♡ Hello from Divya's Web Development Journey!"
);

console.log(
    "✦ Keep learning. Keep building. Keep going."
);