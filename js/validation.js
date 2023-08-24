document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevents the default form submission behavior

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // You can add more advanced validation here if needed
    if (name && email && subject && message) {
      // Assuming you want to display a success message
      alert("Mensagem enviada com sucesso!"); // Replace with your desired success handling

      // Reset the form after successful submission
      contactForm.reset();
    } else {
      // Assuming you want to display an error message
      alert("Por favor, preencha todos os campos."); // Replace with your desired error handling
    }
  });
});
