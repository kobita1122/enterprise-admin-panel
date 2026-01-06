const PASSWORD = "admin123";

function login() {
  const input = document.getElementById("password").value;
  if (input === PASSWORD) {
    document.getElementById("login").style.display = "none";
    document.getElementById("app").style.display = "block";
  } else {
    document.getElementById("error").innerText = "Invalid password";
  }
}

function logout() {
  location.reload();
}

function show(page) {
  document.querySelectorAll(".page").forEach(p => {
    p.style.display = "none";
  });
  document.getElementById(page).style.display = "block";
}
