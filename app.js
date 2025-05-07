document.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.getElementById("date");
  const today = new Date().toISOString().split("T")[0];
  dateInput.value = today;
});

function increment(inputId) {
  const input = document.getElementById(inputId);
  input.value = parseInt(input.value || 0) + 1;
}

function decrement(inputId) {
  inputId.value = Math.max(0, parseInt(inputId.value || 0) - 1);
  if (inputId.value == 0) {
    inputId.value = 0;
  }
}

const plusButtons = document.querySelectorAll(".plus-button");
plusButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const inputId = button.previousElementSibling.id;
    increment(inputId);
  });
});

const minusButtons = document.querySelectorAll(".minus-button");
minusButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const inputId = button.parentElement.querySelector("input");
    decrement(inputId);
  });
});

dropdown = document.querySelector(".dropdown");
const dropdownButton = document.querySelector(".dropdown-button");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownButton.addEventListener("mouseenter", (e) => {
  e.stopPropagation();
  dropdownMenu.classList.toggle("show");
});

// Close the dropdown if clicked outside
dropdown.addEventListener("mouseleave", () => {
  dropdownMenu.classList.remove("show");
});

document.getElementById("confirmYes1").addEventListener("click", () => {
  document.getElementById("customConfirm1").style.display = "none";
  resetForm();
});

document.getElementById("confirmNo1").addEventListener("click", () => {
  document.getElementById("customConfirm1").style.display = "none";
});

//submit button & inputFields check
document.querySelector(".submit").addEventListener("click", (e) => {
  //   e.preventDefault();
  const inputFields = [
    '[name="trailerNumber"]',
    '[name="date"]',
    '[name="unprocessedWares"]',
    '[name="reprocessedWares"]',
    '[name="unprocessedTextiles"]',
    '[name="unprocessedBooks"]',
    '[name="unprocessedShoes"]',
    '[name="shopGoodwillSkid"]',
    '[name="salvageWares"]',
    '[name="salvageTextiles"]',
    '[name="salvageBooks"]',
    '[name="salvageShoes"]',
    '[name="heavySalvage"]',
    '[name="salvageGlass"]',
    '[name="furniture"]',
    '[name="cardboard"]',
    '[name="trash"]',
    '[name="plasticSkids"]',
    '[name="plasticSkidSleeves"]',
    '[name="woodenSkids"]',
    '[name="woodenSkidSleeves"]',
    '[name="totes"]',
  ];

  const isAnyEmpty = inputFields.some((selector) => {
    const el = document.querySelector(selector);
    return el.value.trim() === "";
  });

  if (isAnyEmpty) {
    document.getElementById("missedQuestion").style.display = "flex";
  } else {
    document.getElementById("customConfirm2").style.display = "flex";
  }
});

document.getElementById("confirmYes2").addEventListener("click", () => {
  const form = document.querySelector("form");
  document.getElementById("customConfirm2").style.display = "none";
  // Log form data to the console
  const formData = new FormData(form);
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });

  form.submit();
});

document.getElementById("confirmNo2").addEventListener("click", () => {
  document.getElementById("customConfirm2").style.display = "none";
});

//missed questions modal
document.getElementById("missed").addEventListener("click", () => {
  document.getElementById("missedQuestion").style.display = "none";
});
