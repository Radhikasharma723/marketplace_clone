document.addEventListener("DOMContentLoaded", function () {
  const profileIcon = document.querySelector(".fa-user");
  const dropdown = document.querySelector(".dropdown");
  const signUpForm = document.getElementById("signUpForm");
  const loginForm = dropdown.querySelector("form:not(#signUpForm)");
  const signUpLink = dropdown.querySelector("a[href='#']");
  
  // Toggle dropdown menu on profile icon click
  profileIcon.addEventListener("click", function () {
      dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
  });

  // Toggle between Login and Sign-Up forms
  signUpLink.addEventListener("click", function (e) {
      e.preventDefault();
      loginForm.classList.toggle("hidden");
      signUpForm.classList.toggle("hidden");
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", function (e) {
      if (!profileIcon.contains(e.target) && !dropdown.contains(e.target)) {
          dropdown.style.display = "none";
      }
  });
});
