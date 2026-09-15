var typed= new Typed(".text", {
strings:["UI Developer", "Frontend Developer", "Python Developer", "React Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

// https://github.com/mattboldt/typed.js/   animation of js this  head tag link
//   <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>


  const form = document.getElementById('contactForm');
  const statusMsg = document.getElementById('statusMsg');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('fullName').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !mobile || !email || !message) {
      statusMsg.textContent = "Please fill in all fields.";
      statusMsg.style.color = 'red';
      return;
    }

    // Simple mobile validation
    if (!/^\d{10}$/.test(mobile)) {
      statusMsg.textContent = "Mobile number must be 10 digits.";
      statusMsg.style.color = 'red';
      return;
    }

    statusMsg.textContent = "Message sent successfully!";
    statusMsg.style.color = 'lightgreen';

    // Clear form after submission
    form.reset();
  });










