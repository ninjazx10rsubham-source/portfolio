// LOGIN
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "subham" && pass === "1234") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login");
  }
}

// SHOW SECTION
function showSection(id) {
  let sections = document.querySelectorAll(".section");
  sections.forEach(sec => sec.style.display = "none");
  document.getElementById(id).style.display = "block";
}

// PROFILE
function saveProfile() {
  let profile = {
    name: document.getElementById("name").value,
    dob: document.getElementById("dob").value,
    photo: document.getElementById("photo").value
  };

  localStorage.setItem("profile", JSON.stringify(profile));
  displayProfile();
}

function displayProfile() {
  let data = JSON.parse(localStorage.getItem("profile"));
  if (!data) return;

  document.getElementById("profileDisplay").innerHTML =
    `<h3>${data.name}</h3>
     <p>DOB: ${data.dob}</p>
     <img src="${data.photo}" width="100">`;
}

// ACHIEVEMENTS
function addAchievement() {
  let input = document.getElementById("achievementInput").value;
  let list = JSON.parse(localStorage.getItem("achievements")) || [];

  list.push(input);
  localStorage.setItem("achievements", JSON.stringify(list));
  displayAchievements();
}

function displayAchievements() {
  let list = JSON.parse(localStorage.getItem("achievements")) || [];
  let html = "";

  list.forEach(a => {
    html += `<li>${a}</li>`;
  });

  document.getElementById("achievementList").innerHTML = html;
}

// CERTIFICATES
function addCertificate() {
  let input = document.getElementById("certInput").value;
  let list = JSON.parse(localStorage.getItem("certs")) || [];

  list.push(input);
  localStorage.setItem("certs", JSON.stringify(list));
  displayCertificates();
}

function displayCertificates() {
  let list = JSON.parse(localStorage.getItem("certs")) || [];
  let html = "";

  list.forEach(c => {
    html += `<img src="${c}" width="150">`;
  });

  document.getElementById("certList").innerHTML = html;
}

// ABOUT
function saveAbout() {
  let text = document.getElementById("aboutText").value;
  localStorage.setItem("about", text);
  document.getElementById("aboutDisplay").innerText = text;
}

// CONTACT
function saveContact() {
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  localStorage.setItem("contact", JSON.stringify({ email, phone }));
  displayContact();
}

function displayContact() {
  let data = JSON.parse(localStorage.getItem("contact"));
  if (!data) return;

  document.getElementById("contactDisplay").innerText =
    `Email: ${data.email}, Phone: ${data.phone}`;
}

// LOAD DATA ON PAGE LOAD
window.onload = function () {
  displayProfile();
  displayAchievements();
  displayCertificates();
  displayContact();
};
