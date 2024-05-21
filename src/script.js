


const copyButton = document.getElementById('copyButton');
    const phoneNumberText = document.getElementById('phoneNumber').innerText;

    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(phoneNumberText)
        .then(() => {
            copyButton.innerText = 'Copied';
            setTimeout(() => {
                copyButton.innerText = 'Copy';
            }, 1000);
        })
            .catch(() => {
                alert('Failed to copy phone number');
            });
    });

    // dropdown Navbar
    document.addEventListener('DOMContentLoaded', function() {
        const dropdown = document.querySelector('.dropdown');
        dropdown.addEventListener('mouseenter', function() {
          const menu = this.querySelector('.dropdown-menu');
          menu.classList.remove('hidden');
        });
        dropdown.addEventListener('mouseleave', function() {
          const menu = this.querySelector('.dropdown-menu');
          menu.classList.add('hidden');
        });
      });

    //   mobile menu


// Modal js
// Ambil tombol "Selengkapnya"
// const selengkapnyaButton = document.querySelector('[data-modal-show="paket-silver"]');
// // Ambil modal dengan ID "paket-silver"
// const modalSilver = document.getElementById('paket-silver');
// // Tambahkan event listener untuk klik pada tombol "Selengkapnya"
// selengkapnyaButton.addEventListener('click', function() {
//     // Tampilkan modal
//     modalSilver.classList.remove('hidden');
//     modalSilver.classList.add('flex');
// });
// // Tambahkan event listener untuk klik pada area luar modal untuk menyembunyikan modal
// modalSilver.addEventListener('click', function(event) {
//     if (event.target === modalSilver) {
//         modalSilver.classList.remove('flex');
//         modalSilver.classList.add('hidden');
//     }
// });
// // Tambahan: menutup modal jika tombol "Close modal" diklik
// const closeModalButton = document.querySelector('[data-modal-hide="paket-silver"]');
// closeModalButton.addEventListener('click', function() {
//     modalSilver.classList.remove('flex');
//     modalSilver.classList.add('hidden');
// });




// Fungsi untuk menampilkan modal
function showModal(modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

// Fungsi untuk menyembunyikan modal
function hideModal(modal) {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
}

// Ambil semua tombol dengan atribut data-modal-show
const showModalButtons = document.querySelectorAll('[data-modal-show]');
// Tambahkan event listener untuk setiap tombol
showModalButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modalId = button.getAttribute('data-modal-show');
        const modal = document.getElementById(modalId);
        showModal(modal);
    });
});

// Ambil semua modal dengan atribut data-modal-hide
const hideModalButtons = document.querySelectorAll('[data-modal-hide]');
// Tambahkan event listener untuk setiap tombol tutup modal
hideModalButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modalId = button.getAttribute('data-modal-hide');
        const modal = document.getElementById(modalId);
        hideModal(modal);
    });
});

// Tambahkan event listener untuk klik pada area luar modal untuk menyembunyikan modal
const modals = document.querySelectorAll('[id^="paket-"]');
modals.forEach(modal => {
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            hideModal(modal);
        }
    });
});


// filter dokter
const searchInput = document.getElementById('searchInput');
const specializationFilter = document.getElementById('specializationFilter');
// Tambahkan event listener untuk input pencarian dan filter
searchInput.addEventListener('input', filterDoctors);
specializationFilter.addEventListener('change', filterDoctors);

function filterDoctors() {
    const searchValue = searchInput.value.toLowerCase();
    const specializationValue = specializationFilter.value.toLowerCase();

    // Loop melalui setiap card dokter untuk menyembunyikan atau menampilkan sesuai dengan filter
    document.querySelectorAll('.p-2').forEach(card => {
        const doctorName = card.querySelector('h2').textContent.toLowerCase();
        const specialization = card.querySelector('p.text-xs').textContent.toLowerCase();

        // Periksa apakah nama dokter cocok dengan input pencarian dan spesialisasi sesuai filter
        const isNameMatch = doctorName.includes(searchValue);
        const isSpecializationMatch = specializationValue === '' || specialization.includes(specializationValue);

        // Tampilkan atau sembunyikan card dokter berdasarkan hasil filter
        if (isNameMatch && isSpecializationMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Navbar
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});
const profileDropdown = document.getElementById('profileDropdown');
const profileLink = document.getElementById('profile');
let profileOpen = false;

profileLink.addEventListener('click', () => {
  profileOpen = !profileOpen;
  if (profileOpen) {
    profileDropdown.classList.remove('hidden');
  } else {
    profileDropdown.classList.add('hidden');
  }
});

const mobileProfileDropdown = document.getElementById('mobileProfileDropdown');
const mobileProfileLink = document.getElementById('mobileProfile');
let mobileProfileOpen = false;

mobileProfileLink.addEventListener('click', () => {
  mobileProfileOpen = !mobileProfileOpen;
  if (mobileProfileOpen) {
    mobileProfileDropdown.classList.remove('hidden');
  } else {
    mobileProfileDropdown.classList.add('hidden');
  }
});


// Sliding galeri


//Pencarian Dokter
// const searchInput = document.getElementById('searchInput');
// const specializationFilter = document.getElementById('specializationFilter');

// // Tambahkan event listener untuk input pencarian dan filter
// searchInput.addEventListener('input', filterDoctors);
// specializationFilter.addEventListener('change', filterDoctors);

// function filterDoctors() {
//     const searchValue = searchInput.value.toLowerCase();
//     const specializationValue = specializationFilter.value.toLowerCase();

//     // Loop melalui setiap card dokter untuk menyembunyikan atau menampilkan sesuai dengan filter
//     document.querySelectorAll('.p-4').forEach(card => {
//         const doctorName = card.querySelector('h2').textContent.toLowerCase();
//         const specialization = card.querySelector('p.text-sm').textContent.toLowerCase();

//         // Periksa apakah nama dokter cocok dengan input pencarian dan spesialisasi sesuai filter
//         const isNameMatch = doctorName.includes(searchValue);
//         const isSpecializationMatch = specializationValue === '' || specialization.includes(specializationValue);

//         // Tampilkan atau sembunyikan card dokter berdasarkan hasil filter
//         if (isNameMatch && isSpecializationMatch) {
//             card.style.display = 'block';
//         } else {
//             card.style.display = 'none';
//         }
//     });
// }



