// =====================================================
// TYPED.JS
// =====================================================

var typed = new Typed(".text", {
    strings: [
        "UI Developer",
        "Frontend Developer",
        "Python Developer",
        "React Developer"
    ],

    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// =====================================================
// CONTACT FORM
// =====================================================

const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("statusMsg");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const formData = new FormData(form);

    submitBtn.disabled = true;

    submitBtn.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

    statusMsg.textContent = "Sending message...";
    statusMsg.style.color = "orange";

    try {

        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                body: formData
            }
        );

        const result = await response.json();

        console.log(result);

        if (response.ok && result.success) {

            statusMsg.textContent =
                "Message sent successfully!";

            statusMsg.style.color = "lightgreen";

            form.reset();

        } else {

            statusMsg.textContent =
                result.message || "Message failed.";

            statusMsg.style.color = "red";

            console.log("Web3Forms error:", result);
        }

    } catch (error) {

        console.log("Error:", error);

        statusMsg.textContent =
            "Something went wrong.";

        statusMsg.style.color = "red";

    } finally {

        submitBtn.disabled = false;

        submitBtn.innerHTML =
            '<i class="fa-solid fa-paper-plane"></i> Send Message';
    }

});
