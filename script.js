function goToPage2() {
  const name = document.getElementById("nameInput").value;
  if (name.trim() === "") {
    alert("Please enter your name!");
    return;
  }
  document.getElementById("greeting").innerText = 
    `🎂 Happy Birthday My Love, ${name}! 🎂`;
  showPage("page2");
}

function goToPage3() { showPage("page3"); }
function goToPage4() { showPage("page4"); arrangeCarousel(); }
function goToPage5() { showPage("page5"); }

function showPage(pageId) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

// 🔥 Arrange carousel
function arrangeCarousel() {
  const carousel = document.getElementById('carousel');
  const imgs = carousel.querySelectorAll('img');
  const total = imgs.length;
  const angle = 360 / total;
  imgs.forEach((img, index) => {
    const rotateY = angle * index;
    img.style.transform = `rotateY(${rotateY}deg) translateZ(350px)`;
  });
}

// 🔥 Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
document.querySelectorAll(".carousel img").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  });
});
lightbox.addEventListener("click", () => lightbox.style.display = "none");

// 🎁 Surprise Teddy Pop Animation
const giftBox = document.getElementById("giftBox");
const bigTeddy = document.getElementById("bigTeddy");
giftBox.addEventListener("click", () => {
  giftBox.style.display = "none";
  bigTeddy.style.display = "block";
});
