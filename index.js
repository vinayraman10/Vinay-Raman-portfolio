// ✅ Initialize EmailJS with your Public Key
emailjs.init("NwfdvgsZ5LJsaUotj");

// ✅ Handle contact form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form reload

  // Send form data via EmailJS
  emailjs.sendForm("service_9pgc5iu", "template_ay849yl", this)
    .then(() => {
      alert("Message sent successfully!");
      this.reset(); // Clear the form after successful send
    }, (error) => {
      console.error("EmailJS Error:", error); // Log error object
      alert("Failed to send message: " + (error.text || JSON.stringify(error)));
    });
});

// ✅ Dynamically update the footer year
document.getElementById("year").textContent = new Date().getFullYear();


// ✅ Hamburger Menu Toggle Functionality
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger"); // Hamburger icon
  const navLinks = document.querySelector(".nav-links"); // Navigation list

  hamburger.addEventListener("click", () => {
    // Toggle active class to show/hide full menu
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
});


