// _assets/js/suggest.js

function toggleSuggestBox() {
  const box = document.getElementById("suggest-box");
  box.classList.toggle("hidden");
}

async function submitSuggestion() {
  const input = document.getElementById("suggestion-input");
  const status = document.getElementById("submit-status");
  const suggestion = input.value.trim();

  if (!suggestion) return;

  const endpoint = "https://script.google.com/macros/s/AKfycbxBRRFfwpaQ9Uc4RtgNvhD1MAOBOEWXbXYZO_pYN5lpOPF_11o42Hvaj6OnF1lN6kosKA/exec";

  try {
    await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `suggestion=${encodeURIComponent(suggestion)}`
    });

    status.textContent = "Submitted!";
    status.classList.remove("hidden");
    input.value = "";

    setTimeout(() => {
      status.classList.add("hidden");
      toggleSuggestBox();
    }, 2000);
  } catch (err) {
    console.error("Submission failed:", err);
    status.textContent = "Failed. Try again.";
    status.classList.remove("hidden");
    status.style.color = "red";
  }
}