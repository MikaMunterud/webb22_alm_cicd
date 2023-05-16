/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function submitForm(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      // Update the result element with the new value
      const resultEl = document.getElementById('result');
      resultEl.textContent = data.result;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
