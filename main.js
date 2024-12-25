document.addEventListener("DOMContentLoaded", function () {
  const itemElements = document.querySelectorAll(".MenuItem");
  const homeElement = document.querySelector(".home");
  const titleElement = document.querySelector(".title");
  const itemList = document.querySelector(".itemList");

  function showHome(content) {
    homeElement.textContent = content;
    homeElement.classList.add("show");
  }

  function hideHome() {
    homeElement.classList.remove("show");
    setTimeout(() => {
      homeElement.textContent = "";
    }, 0); // Match the duration of the CSS transition
  }

  titleElement.addEventListener("mouseenter", function () {
    showHome("Home");
  });

  titleElement.addEventListener("mouseleave", function () {
    hideHome();
  });

  itemElements.forEach(function (itemElement) {
    itemElement.addEventListener("mouseenter", function () {
      showHome(itemElement.textContent);
    });
  });

  itemList.addEventListener("mouseleave", function () {
    hideHome();
  });
});




