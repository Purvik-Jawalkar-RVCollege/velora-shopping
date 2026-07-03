const header = document.querySelector(".site-header");
const pills = document.querySelectorAll(".pill");

const updateHeader = () => {
  header.dataset.scrolled = window.scrollY > 18 ? "true" : "false";
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

pills.forEach((pill) => {
  pill.addEventListener("click", () => {
    pills.forEach((item) => item.classList.remove("active"));
    pill.classList.add("active");
  });
});
