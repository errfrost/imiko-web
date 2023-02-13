const vacancy = document.getElementById("vacancy");
const dropbox = document.getElementById("vacancy-box");
const list = document.getElementsByName("vacancy-item");
vacancy.addEventListener("click", () => {
  dropbox.click();
});

vacancy.addEventListener("onkeypress", (e) => {
  e.preventDefault();
});

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', (e) => {
    vacancy.value = e.target.title;
    dropbox.click();
  });
}