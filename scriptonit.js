const chatBtn = document.getElementById("chat-btn");
const form = chatBtn.querySelector("form");
const img = chatBtn.querySelector("img");
const cls = chatBtn.querySelector("#close");
img.addEventListener("click", function () {
  form.classList = null;
  img.setAttribute("class", "hidden");
});
cls.addEventListener("click", function () {
  form.setAttribute("class", "hidden");
  img.classList = null;
});
