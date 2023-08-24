document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        entry.target.addEventListener(
          "transitionend",
          () => {
            // Remove the "hidden" class after the animation completes
            entry.target.classList.remove("hidden");
          },
          { once: true }
        ); // Make sure the event listener is triggered only once
      } else {
        entry.target.classList.add("hidden");
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
});

