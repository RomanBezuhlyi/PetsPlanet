document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-block__item-top");

  faqItems.forEach(function (item) {
    item.addEventListener("click", function () {
      const parentItem = this.parentNode;
      const itemBody = parentItem.querySelector(".faq-block__item-body");
      const allItems = document.querySelectorAll(".faq-block__item-body");

      // Закриття всіх інших айтемів
      allItems.forEach(function (otherItem) {
        if (otherItem !== itemBody && otherItem.classList.contains("open")) {
          otherItem.classList.remove("open");
          otherItem.parentNode.classList.remove("open");
          otherItem.parentNode.querySelector("span").textContent = "+";
        }
      });

      // Відкриття або закриття поточного айтема
      if (itemBody.classList.contains("open")) {
        itemBody.classList.remove("open");
        parentItem.classList.remove("open");
        this.querySelector("span").textContent = "+";
      } else {
        itemBody.classList.add("open");
        parentItem.classList.add("open");
        this.querySelector("span").textContent = "-";
      }
    });
  });
});
