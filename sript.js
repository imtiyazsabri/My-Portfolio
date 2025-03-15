let home = document.getElementById("section1");
let about = document.getElementById("section2");
let education = document.getElementById("section3");
let portfolio = document.getElementById("section4");
let contact = document.getElementById("section5");

let homeBtn = document.getElementById("homeBtn");
let aboutBtn = document.getElementById("aboutBtn");
let educationBtn = document.getElementById("educationBtn");
let portfolioBtn = document.getElementById("portfolioBtn");
let contactBtn = document.getElementById("contactBtn");

console.log(home);
console.log(about);
console.log(education);
console.log(portfolio);
console.log(contact);

homeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  home.removeAttribute("style");
  about.style.display = "none";
  education.style.display = "none";
  portfolio.style.display = "none";
  contact.style.display = "none";
});

aboutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  about.removeAttribute("style");
  home.style.display = "none";
  education.style.display = "none";
  portfolio.style.display = "none";
  contact.style.display = "none";
});

educationBtn.addEventListener("click", (e) => {
  e.preventDefault();
  education.removeAttribute("style");
  home.style.display = "none";
  about.style.display = "none";
  portfolio.style.display = "none";
  contact.style.display = "none";
});

portfolioBtn.addEventListener("click", (e) => {
  e.preventDefault();
  portfolio.removeAttribute("style");
  home.style.display = "none";
  about.style.display = "none";
  education.style.display = "none";
  contact.style.display = "none";
});

contactBtn.addEventListener("click", (e) => {
    e.preventDefault();
    contact.removeAttribute("style");
    home.style.display = "none";
    about.style.display = "none";
    education.style.display = "none";
    portfolio.style.display = "none";
})


let HomeAboutBtn = document.querySelector(".Btn1")
console.log(HomeAboutBtn)
HomeAboutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  about.removeAttribute("style");
  home.style.display = "none";
  education.style.display = "none";
  portfolio.style.display = "none";
  contact.style.display = "none";
})








// save data

document.getElementById("details").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  let name = document.getElementById("name").value;
  localStorage.setItem("username", name);

  let email = document.getElementById("email").value;
  localStorage.setItem("email", email);

  let subject = document.getElementById("subject").value;
  localStorage.setItem("subject", subject);

  let message = document.getElementById("message", message);
  localStorage.setItem("message", message);
  alert("Data saved!");
});

