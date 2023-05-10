function checkEligibility() {
  let age = document.getElementById("age").value;
  let isMember = document.getElementById("member");

  if (Number(age) >= 65) {
    document.getElementById("output").innerHTML =
      "Congrats! 🎉 You are eligible for a senior Discount 👵🏽";
    document.getElementById("output").style.color = "green";
  } else if (Number(age) >= 18 && isMember.checked) {
    document.getElementById("output").innerHTML =
      "Congrats! 🎉 You are eligible for a Discount";
    document.getElementById("output").style.color = "green";
  } else {
    document.getElementById("output").innerHTML =
      "Sorry, You are not eligible for any Discount 👎🏽❌";
    document.getElementById("output").style.color = "red";
  }
}

const form = document.getElementById("form");

// prevents reload of the form
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
