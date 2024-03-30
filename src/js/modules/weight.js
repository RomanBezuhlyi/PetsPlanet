document.addEventListener("DOMContentLoaded", function () {
  const weightItems = document.querySelectorAll(".right-weight li");

  weightItems.forEach((item) => {
    item.addEventListener("click", function () {
      weightItems.forEach((item) => {
        item.classList.remove("active");
      });

      this.classList.add("active");
    });
  });
});
