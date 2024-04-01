document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".right-faq__item");

  faqItems.forEach((item) => {
    const top = item.querySelector(".right-faq__top");
    const openItem = top.querySelector(".open-item");

    top.addEventListener("click", function () {
      if (!item.classList.contains("open")) {
        faqItems.forEach((otherItem) => {
          otherItem.classList.remove("open");
          otherItem.querySelector(".open-item").innerText = "+";
        });
        item.classList.add("open");
        openItem.innerText = "-";
      } else {
        item.classList.remove("open");
        openItem.innerText = "+";
      }
    });
  });
});
