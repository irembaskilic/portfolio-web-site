function toggleCard(element) {
  const content = element.nextElementSibling;
  content.classList.toggle("show");
}
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = modal.querySelector(".close");

  // Bütün portfolyo görsellerini seç
  const allImgs = document.querySelectorAll(".portfolio-images img, .portfolio-imagess img, .portfolio-imagesss img");

  allImgs.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src; // Tıklanan fotoğrafı modalda göster
    });
  });

  // Çarpıya basınca kapat
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Boş alana tıklanınca kapat
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = modal.querySelector(".close");
  const prevBtn = modal.querySelector(".prev");
  const nextBtn = modal.querySelector(".next");

  // Bütün görselleri seç
  const allImgs = document.querySelectorAll(".portfolio-images img, .portfolio-imagess img, .portfolio-imagesss img");

  let currentIndex = 0;

  function showImage(index) {
    modalImg.src = allImgs[index].src;
    currentIndex = index;
  }

  // Fotoğrafa tıklayınca aç
  allImgs.forEach((img, index) => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      showImage(index);
    });
  });

  // Çarpıya basınca kapat
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Boş alana tıklayınca kapat
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Önceki
  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + allImgs.length) % allImgs.length;
    showImage(currentIndex);
  });

  // Sonraki
  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % allImgs.length;
    showImage(currentIndex);
  });
});
