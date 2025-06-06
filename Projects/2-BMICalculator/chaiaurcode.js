const form = document.querySelector("form");
// this use case will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    if (bmi < 18.6) {
      results.innerHTML = `<p><span>${bmi}</span> Under Weight</p>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<p><span>${bmi}</span> Normal Range</p>`;
    } else {
      results.innerHTML = `<p><span>${bmi}</span> Over Weight</p>`;
    }
  }
});
