// ===============================
// ปรับแต่งข้อมูลเว็บไซต์ตรงนี้
// ใส่วันที่เริ่มคบกันในรูปแบบ YYYY-MM-DD
// ตัวอย่าง: "2023-07-01"
// ===============================
const LOVE_START_DATE = "2023-07-01";

// หากต้องการแก้ข้อความจดหมาย สามารถแก้ใน index.html ได้
const $ = (selector) => document.querySelector(selector);

// เมนูสำหรับโทรศัพท์
const menuToggle = $("#menuToggle");
const navLinks = $("#navLinks");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// เปิด/ปิดข้อความจดหมาย
$("#letterReveal").addEventListener("click", () => {
  const text = $("#letterText");
  text.classList.toggle("letter-highlight");
  text.scrollIntoView({ behavior: "smooth", block: "center" });
  showToast("ทุกคำเขียนขึ้นด้วยความรัก ♡");
});

// ปุ่มขอโทษและให้อภัย
$("#forgiveBtn").addEventListener("click", () => {
  $("#forgiveMessage").textContent = "ขอบคุณที่รับฟังนะ ขอส่งกอดอุ่น ๆ ให้หนึ่งที ♡";
  createHearts(24);
});

// ปุ่มเซอร์ไพรส์ท้ายเว็บ
$("#surpriseBtn").addEventListener("click", () => {
  $("#finalMessage").textContent = "รักเธอที่สุดเลยนะ — วันนี้ พรุ่งนี้ และทุก ๆ วัน ♡";
  createHearts(55);
  showToast("ส่งความรักไปถึงเธอแล้ว 💗");
});

// สร้างหัวใจลอย
function createHearts(amount = 1) {
  const container = $("#floatingHearts");
  const symbols = ["♡", "♥", "💕", "✧", "💗"];
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.fontSize = `${14 + Math.random() * 22}px`;
    heart.style.animationDuration = `${4 + Math.random() * 4}s`;
    container.appendChild(heart);
    window.setTimeout(() => heart.remove(), 8500);
  }
}
window.setInterval(() => createHearts(1), 2300);

// นับเวลาความสัมพันธ์
function updateCounter() {
  const start = new Date(`${LOVE_START_DATE}T00:00:00`);
  const now = new Date();
  if (Number.isNaN(start.getTime()) || start > now) {
    $("#days").textContent = "—";
    $("#hours").textContent = "—";
    $("#minutes").textContent = "—";
    $("#seconds").textContent = "—";
    return;
  }
  let seconds = Math.floor((now - start) / 1000);
  const days = Math.floor(seconds / 86400); seconds %= 86400;
  const hours = Math.floor(seconds / 3600); seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;
  $("#days").textContent = days.toLocaleString("th-TH");
  $("#hours").textContent = String(hours).padStart(2, "0");
  $("#minutes").textContent = String(minutes).padStart(2, "0");
  $("#seconds").textContent = String(seconds).padStart(2, "0");
}
updateCounter();
window.setInterval(updateCounter, 1000);

// เพลง: เบราว์เซอร์จะอนุญาตให้เล่นหลังผู้ใช้กดปุ่มเท่านั้น
const music = $("#backgroundMusic");
const musicBtn = $("#musicBtn");
musicBtn.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      $("#musicLabel").textContent = "หยุดเพลง";
      musicBtn.setAttribute("aria-label", "หยุดเพลง");
    } catch {
      showToast("เพิ่มไฟล์ music.mp3 ไว้ในโฟลเดอร์หลักก่อนนะ");
    }
  } else {
    music.pause();
    $("#musicLabel").textContent = "เปิดเพลง";
    musicBtn.setAttribute("aria-label", "เปิดเพลง");
  }
});

// แสดงข้อความแจ้งเตือนเล็ก ๆ
let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

// แสดงเนื้อหาเมื่อเลื่อนมาถึง
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

$("#year").textContent = new Date().getFullYear();
