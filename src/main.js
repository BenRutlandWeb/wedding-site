import "./style.css";

window.googlesheets = (e) => {
  e.preventDefault();

  const { target: form } = e;
  const button = form.querySelector("button");

  button.disabled = true;

  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
  })
    .then((r) => r.json())
    .then((r) => {
      button.disabled = false;
      form.nextElementSibling.hidden = false;
      form.remove();
    });

  return false;
};
