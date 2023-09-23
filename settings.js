const toggles = document.querySelectorAll(".settings [type='checkbox']");
const radios = document.querySelectorAll(".settings [type='radio']");
const doc = document.documentElement;

function updateSiteUi({ name, value }) {
  return (doc.dataset[name] = value);
}

toggles.forEach((toggle) => {
  toggle.addEventListener("change", (event) => {
    const { name, checked } = event.target;
    updateSiteUi({ name, value: checked });
    localStorage.setItem(name, checked);
  });
});

radios.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    const { name, id } = event.target;
    updateSiteUi({ name, value: id });
    localStorage.setItem(name, id);
  });
});
