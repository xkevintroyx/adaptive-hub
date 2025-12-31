function showTab(tab) {
  document.getElementById("content").innerHTML =
    "<p>You clicked " + tab + " tab.</p>" +
    document.getElementById("signupForm").outerHTML;
}

document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(signupForm);
    await fetch("/signup", { method: "POST", body: formData });
    alert("Check your email for your offer!");
  });

  const newsletterForm = document.getElementById("newsletterForm");
  newsletterForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(newsletterForm);
    await fetch("/send-newsletter", { method: "POST", body: formData });
    alert("Newsletter sent!");
  });
});

function toggleAdmin() {
  const pass = prompt("Enter admin password:");
  if (pass === "secret123") {
    document.getElementById("adminPanel").style.display = "block";
  } else {
    alert("Wrong password");
  }
}
