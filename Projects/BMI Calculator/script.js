const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const heightEl = document.querySelector(".height");
  const weightEl = document.querySelector(".weight");
  const result = document.getElementById("result");

  const height = parseFloat(heightEl?.value);
  const weight = parseFloat(weightEl?.value);

  if (!height || height <= 0 || isNaN(height)) {
    result.innerHTML = "Please give a valid height....";
    return;
  }
  if (!weight || weight <= 0 || isNaN(weight)) {
    result.innerHTML = "Please give a valid weight....";
    return;
  }

  const heightM = height / 100;
  const bmi = weight / (heightM * heightM);
  result.innerHTML = `BMI: ${bmi.toFixed(2)}`;
});
