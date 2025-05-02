document.addEventListener("DOMContentLoaded", () => {
    console.log("Sports 220 loaded!");
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".read-more-btn");
  
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        content.classList.toggle("hidden");
        btn.textContent = content.classList.contains("hidden") ? "Read More" : "Read Less";
      });
    });
  });
  
//form handling 
  document.addEventListener("DOMContentLoaded", () => {
    // Read More toggle for news
    const buttons = document.querySelectorAll(".read-more-btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        content.classList.toggle("hidden");
        btn.textContent = content.classList.contains("hidden") ? "Read More" : "Read Less";
      });
    });
  
    // Add to Cart (basic)
    const cartButtons = document.querySelectorAll(".add-to-cart");
    cartButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        alert("Item added to cart!");
      });
    });
  
    // Contact Form Submission
    const form = document.getElementById("contact-form");
    const response = document.getElementById("form-response");
  
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        response.textContent = "Thank you! Your message has been received.";
        form.reset();
      });
    }
  });
  