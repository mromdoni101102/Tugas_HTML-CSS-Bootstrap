const btnSwitch = document.getElementById('buttonToggle');
const body = document.body;

window.onload = () => { 
  // sebuah fungsi yang akan dieksekusi ketika seluruh konten dari halaman web telah dimuat sepenuhnya.

  // Memeriksa status mode gelap yang tersimpan di localStorage
  const modeGelap = localStorage.getItem('modeGelap');
  // Jika mode gelap telah diaktifkan sebelumnya
  if (modeGelap === 'enabled') {
    // Mengatur tombol switch sebagai tercentang
    btnSwitch.checked = true;
    // Mengatur tema body menjadi gelap
    body.setAttribute("data-bs-theme", "dark");
  }
}

// Ketika terjadi perubahan pada tombol switch
btnSwitch.addEventListener('change', () => {
  // Jika tombol switch dicentang
  if (btnSwitch.checked) {

    // Menyimpan status mode gelap sebagai 'enabled' di localStorage
    localStorage.setItem('modeGelap', 'enabled');
    // Mengatur tema body menjadi gelap
    body.setAttribute("data-bs-theme", "dark");

  } else {  // Jika tombol toggle tidak dicentang    

    // Menyimpan status mode gelap sebagai 'disabled' di localStorage
    localStorage.setItem('modeGelap', 'disbled');
    // Mengatur tema body menjadi terang
    body.setAttribute("data-bs-theme", "light");
  }
})