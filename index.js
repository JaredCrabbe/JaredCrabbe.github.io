const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", setActiveClass);
});

function setActiveClass(event) {
  navLinks.forEach(item => {
    item.classList.remove("active");
  });
  event.target.classList.add("active");
  let computedStyle = window.getComputedStyle(event.target, ":hover");
  event.target.style.color = computedStyle.color;
}
