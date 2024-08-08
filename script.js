document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const menu = document.getElementById("menu");

  menuIcon.addEventListener("click", function () {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
      menu.style.display = "none";
    }
  });
});
