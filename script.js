// Efek mengetik di judul
const text = "Halo, saya Harif Habibi";
let index = 0;
function ketik() {
    if (index < text.length) {
        document.getElementById("typing-text").textContent += text.charAt(index);
        index++;
        setTimeout(ketik, 100);
    }
}
document.getElementById("typing-text").textContent = "";
ketik();

// Klik foto untuk ubah warna border
const foto = document.getElementById("foto-profile");
foto.addEventListener("click", () => {
    foto.style.borderColor = foto.style.borderColor === "yellow" ? "white" : "yellow";
});

// Dark mode toggle (tekan tombol D)
document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "d") {
        document.body.classList.toggle("dark-mode");
    }
});
