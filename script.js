// LOGIN WITH STORED DATA
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  let storedUser = localStorage.getItem("username") || "subham";
  let storedPass = localStorage.getItem("password") || "1234";

  if (user === storedUser && pass === storedPass) {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login");
  }
}

// DARK MODE
function toggleMode() {
  document.body.classList.toggle("dark-mode");

  let btn = document.getElementById("modeBtn");
  if (document.body.classList.contains("dark-mode")) {
    btn.innerText = "☀️ Light Mode";
  } else {
    btn.innerText = "🌙 Dark Mode";
  }
}

// SECTION SWITCH
function showSection(id) {
  let sections = document.querySelectorAll(".section");

  sections.forEach(sec => {
    sec.style.display = "none";
    sec.style.opacity = 0;
  });

  let active = document.getElementById(id);
  active.style.display = "block";

  setTimeout(() => {
    active.style.opacity = 1;
  }, 100);
}

// PROFILE
function saveProfile() {
  let profile = {
    name: name.value,
    dob: dob.value,
    photo: photo.value
  };
  localStorage.setItem("profile", JSON.stringify(profile));
  displayProfile();
}

function displayProfile() {
  let data = JSON.parse(localStorage.getItem("profile"));
  if (!data) return;

  profileDisplay.innerHTML = `
    <h3>${data.name}</h3>
    <p>DOB: ${data.dob}</p>
    <img src="${data.photo}" width="100">
  `;
}

// ACHIEVEMENTS
function addAchievement() {
  let val = achievementInput.value;
  let list = JSON.parse(localStorage.getItem("achievements")) || [];

  list.push(val);
  localStorage.setItem("achievements", JSON.stringify(list));
  displayAchievements();
}

function displayAchievements() {
  let list = JSON.parse(localStorage.getItem("achievements")) || [];
  achievementList.innerHTML = list.map(a => `<li>${a}</li>`).join("");
}

// CERTIFICATES
function addCertificate() {
  let val = certInput.value;
  let list = JSON.parse(localStorage.getItem("certs")) || [];

  list.push(val);
  localStorage.setItem("certs", JSON.stringify(list));
  displayCertificates();
}

function displayCertificates() {
  let list = JSON.parse(localStorage.getItem("certs")) || [];
  certList.innerHTML = list.map(c => `<img src="${c}" width="150">`).join("");
}

// ABOUT
function saveAbout() {
  localStorage.setItem("about", aboutText.value);
  aboutDisplay.innerText = aboutText.value;
}

// CONTACT
function saveContact() {
  let data = {
    email: email.value,
    gmail: gmail.value,
    phone: phone.value,
    insta: insta.value
  };
  localStorage.setItem("contact", JSON.stringify(data));
  displayContact();
}

function displayContact() {
  let data = JSON.parse(localStorage.getItem("contact"));
  if (!data) return;

  contactDisplay.innerHTML = `
    <p>📧 Email: ${data.email}</p>
    <p>📨 Gmail: ${data.gmail}</p>
    <p>📱 Phone: ${data.phone}</p>
    <p>📸 Instagram: ${data.insta}</p>
  `;
}

// INITIAL LOAD
window.onload = function () {

  // DEFAULT LOGIN
  if (!localStorage.getItem("username")) {
    localStorage.setItem("username", "subham");
    localStorage.setItem("password", "1234");
  }

  // DEFAULT CONTACT
  if (!localStorage.getItem("contact")) {
    localStorage.setItem("contact", JSON.stringify({
      email: "SCFU425001",
      gmail: "ninjazx10rsubham@gmail.com",
      phone: "9674218151",
      insta: "subhamdey5535"
    }));
  }

  displayProfile();
  displayAchievements();
  displayCertificates();
  displayContact();
};
