function mymenuFuncion() {
    var menuBth = document.getElementById("myNavMenu");

    if (menuBth.className === "nav-menu") {
        menuBth.className += "responsive";

    } else {
        menuBth.className = "nav-menu";
    }
}


/*-----------Dark mode--------------------*/

const body = document.querySelector("body");
toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});

/*-------------Typing Effect----------------------*/

var typingEffect = new Typed(".typedText", {
    strings: ["Designed", "Coder", "Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})

/*--------------Scroll animation---------------------*/

const sr = scrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 200 });

sr.reveal(".project-box", { interval: 200 });

sr.reveal(".top-header", {});

const srLeft = scrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = scrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".sill-box", { delay: 100 });

/*-------------active link----------------------*/

const sections = document.querySelector(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.foreach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offdsetTop - 50,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");

        } else {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);

function downloadCV() {
    // Path to your PDF file
    const filePath = 'D:/Bunty/Resume/ResumeCsR'; // Replace with the actual path to your CV file
    console.log(filePath);
    // Create a temporary anchor element
    const link = document.createElement('a');

    // Set the download attribute with the desired filename
    link.href = filePath;
    link.download = 'My_CV.pdf'; // Replace with your preferred file name

    // Append the anchor to the body (required for some browsers)
    document.body.appendChild(link);

    // Trigger the click event to download the file
    link.click();

    // Remove the anchor from the DOM
    document.body.removeChild(link);
}

// Example: Add a button in your HTML to call this function
// <button onclick="downloadCV()">Download CV</button>