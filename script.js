// Kart aç-kapa
function toggleCard(element) {
  const content = element.nextElementSibling;
  content.classList.toggle("show");
}

// Modal Görüntüleme
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = modal.querySelector(".close");
  const prevBtn = modal.querySelector(".prev");
  const nextBtn = modal.querySelector(".next");

  const allImgs = document.querySelectorAll(".portfolio-images img");
  let currentIndex = 0;

  function showImage(index) {
    modalImg.src = allImgs[index].src;
    currentIndex = index;
  }

  allImgs.forEach((img,index) => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      showImage(index);
    });
  });

  closeBtn.addEventListener("click", () => { modal.style.display="none"; });
  modal.addEventListener("click", (e) => { if(e.target===modal) modal.style.display="none"; });

  prevBtn.addEventListener("click", (e) => { e.stopPropagation(); currentIndex=(currentIndex-1+allImgs.length)%allImgs.length; showImage(currentIndex); });
  nextBtn.addEventListener("click", (e) => { e.stopPropagation(); currentIndex=(currentIndex+1)%allImgs.length; showImage(currentIndex); });
});

document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-slide");

  const options = {
    threshold: 0.2 // elementin %20'si görünür olunca animasyon başlar
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
        // bir kere animasyon çalıştıktan sonra gözlemeyi kaldır
        observer.unobserve(entry.target);
      }
    });
  }, options);

  faders.forEach(fader => {
    observer.observe(fader);
  });
});
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if(window.scrollY > 400) backToTop.style.display = 'block';
  else backToTop.style.display = 'none';
});
