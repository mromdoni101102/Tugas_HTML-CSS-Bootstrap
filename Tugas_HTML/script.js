const btnSwitch = document.getElementById('buttonToggle');
const body = document.body;

window.onload = () => {
  const modeGelap = localStorage.getItem('modeGelap');
  if (modeGelap === 'enabled') {
    btnSwitch.checked = true;
    body.setAttribute("data-bs-theme", "dark");
  }
}

btnSwitch.addEventListener('change', () => {
  if (btnSwitch.checked) {
    localStorage.setItem('modeGelap', 'enabled');
    body.setAttribute("data-bs-theme", "dark");
  } else {
    localStorage.setItem('modeGelap', 'disbled');
    body.setAttribute("data-bs-theme", "light");
  }
})