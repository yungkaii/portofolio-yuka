/* Logic untuk membuka dan menutup sidebar */

// Fungsi untuk membuka sidebar
function openNav() {
    // Mengambil elemen sidebar berdasarkan ID-nya
    const sidebar = document.getElementById("sidebar");
    // Mengambil elemen konten utama berdasarkan ID-nya
    const mainContent = document.getElementById("main");

    // Jika elemennya ada, ubah stylenya
    if (sidebar && mainContent) {
        sidebar.style.width = "250px";
        mainContent.style.marginLeft = "250px";
    }
}

// Fungsi untuk menutup sidebar
function closeNav() {
    // Mengambil elemen sidebar berdasarkan ID-nya
    const sidebar = document.getElementById("sidebar");
    // Mengambil elemen konten utama berdasarkan ID-nya
    const mainContent = document.getElementById("main");
    
    // Jika elemennya ada, ubah stylenya
    if (sidebar && mainContent) {
        sidebar.style.width = "0";
        mainContent.style.marginLeft = "0";
    }
}