# Project2

## link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

```
javascript

const form = document.querySelector('form');
// const height = parseInt(document.querySelector('#height').value);
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      results.innerHTML = `<span>'under weight'</span>`;
    } else if (24.6 < bmi < 18.6) {
      results.innerHTML = `<span>"normal range</span>`;
    } else if (bmi > 24.6) {
      results.innerHTML = `<span>"overweight"</span>`;
    }
  }
});


```