document.addEventListener("DOMContentLoaded", function () {

  console.log("JS loaded");

  // =========================
  // CONTACT FORM (SAFE)
  // =========================
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {

      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      const msg = document.getElementById('form-message');

      if (name === "" || email === "" || message === "") {
        msg.innerHTML = "All fields are required!";
        msg.style.color = "red";
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        msg.innerHTML = "Enter valid email!";
        msg.style.color = "red";
        return;
      }

      msg.innerHTML = "Inquiry sent successfully!";
      msg.style.color = "green";

    });
  }

  // =========================
  // STAR RATING (DIAMOND)
  // =========================
  const stars = document.querySelectorAll('.star');
  const ratingInput = document.getElementById('rating');

  stars.forEach((star, index) => {

    star.addEventListener('click', () => {

      const rating = index + 1;
      if (ratingInput) ratingInput.value = rating;

      stars.forEach((s, i) => {
        if (i < rating) {
          s.style.color = "#775a19";
        } else {
          s.style.color = "#d1c5b4";
        }
      });

    });

  });

  // =========================
  // FEEDBACK FORM SUBMIT
  // =========================
  const feedbackForm = document.getElementById('feedback-form');

  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(e) {

      e.preventDefault();

      const rating = document.getElementById('rating')?.value || 0;
      const feedback = document.getElementById('feedback-text')?.value.trim();
      const msg = document.getElementById('feedback-message');

      if (rating == 0) {
        msg.innerHTML = "Please select a rating!";
        msg.style.color = "red";
        return;
      }

      if (!feedback) {
        msg.innerHTML = "Please enter feedback!";
        msg.style.color = "red";
        return;
      }

      msg.innerHTML = "Thank you for your feedback!";
      msg.style.color = "green";

      feedbackForm.reset();

      stars.forEach(s => {
        s.style.color = "#d1c5b4";
      });

    });
  }

});