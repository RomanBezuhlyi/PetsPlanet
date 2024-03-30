document.addEventListener("DOMContentLoaded", function () {
  const numberItems = document.querySelectorAll(".right-number__item");

  numberItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Знімаємо клас .active з усіх елементів
      numberItems.forEach((item) => {
        item.classList.remove("active");
        const radioBoxActive = item.querySelector(".radio-box-active");
        if (radioBoxActive) {
          radioBoxActive.remove();
        }
      });

      // Додаємо клас .active до клікнутого елемента
      this.classList.add("active");

      // Додаємо блок .radio-box-active до клікнутого елемента
      const radioBox = this.querySelector(".radio-box");
      const radioBoxActive = document.createElement("div");
      radioBoxActive.classList.add("radio-box-active");
      radioBox.appendChild(radioBoxActive);
    });
  });
});
