document.addEventListener("DOMContentLoaded", function () {
  const cityInput = document.getElementById("city");
  const cityDropdown = document.querySelector(".input-drop .dropdown");
  const cityDropdownItems = document.querySelectorAll(
    ".input-drop .dropdown__item"
  );
  const arrowIcon = document.querySelector(".input__arr");

  // Функція для відкриття дропдауну та розвертання стрілки
  function toggleDropdown() {
    if (cityDropdown.style.display === "block") {
      cityDropdown.style.display = "none";
      arrowIcon.style.transform = "rotate(0deg)";
    } else {
      cityDropdown.style.display = "block";
      arrowIcon.style.transform = "rotate(180deg)";
    }
  }

  // Відкриття/закриття дропдауну та розвертання стрілки при кліку на інпут або стрілку
  cityInput.addEventListener("click", toggleDropdown);
  arrowIcon.addEventListener("click", function (event) {
    toggleDropdown();
    event.stopPropagation();
  });

  // Вибір значення з дропдауну
  cityDropdownItems.forEach((item) => {
    item.addEventListener("click", function () {
      cityInput.value = this.textContent;
      cityDropdown.style.display = "none";
      arrowIcon.style.transform = "rotate(0deg)";
    });
  });

  // Закриття дропдауну при кліці поза ним
  document.addEventListener("click", function () {
    if (cityDropdown.style.display === "block") {
      cityDropdown.style.display = "none";
      arrowIcon.style.transform = "rotate(0deg)";
    }
  });

  // Запобігання закриття дропдауну при кліці на стрілку
  arrowIcon.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
