# OUR LOVE STORY — Pink Luxury

เว็บไซต์บอกรัก/ง้อแฟนแบบ static ใช้ HTML, CSS และ JavaScript พร้อมเผยแพร่ผ่าน GitHub Pages ได้

## ไฟล์
- `index.html` — โครงสร้างหน้าเว็บ
- `style.css` — ธีม Pink Luxury
- `script.js` — ปุ่มโต้ตอบ, หัวใจลอย, ตัวนับวัน, เพลง
- `images/` — ใส่รูปคู่ของคุณ

## ปรับแต่งก่อนเผยแพร่
1. เปิด `script.js` แล้วเปลี่ยน `LOVE_START_DATE` เป็นวันที่เริ่มคบกัน เช่น `2025-01-01`
2. ใส่รูปใน `images/` โดยใช้ชื่อ `photo1.jpg`, `photo2.jpg`, `photo3.jpg`
3. ถ้าต้องการเพลง ให้วางไฟล์เพลงที่คุณมีสิทธิ์ใช้งานชื่อ `music.mp3` ไว้ระดับเดียวกับ `index.html`
4. แก้ข้อความจดหมายและไทม์ไลน์ใน `index.html` ให้เป็นเรื่องราวจริงของคุณ

## เปิดดูในเครื่อง
ดับเบิลคลิก `index.html` หรือเปิดโฟลเดอร์ด้วย VS Code แล้วใช้ Live Server

## เผยแพร่ด้วย GitHub Pages
1. สร้าง Repository แบบ Public ชื่อ `our-love-story`
2. อัปโหลดไฟล์ทั้งหมดจากโฟลเดอร์นี้ โดยให้ `index.html` อยู่ที่ root ของ repository
3. ไปที่ Settings → Pages
4. ใน Build and deployment เลือก Deploy from a branch
5. เลือก Branch `main` และ Folder `/ (root)` แล้วกด Save
6. รอสักครู่ จากนั้นเปิด URL ที่ GitHub Pages แสดงให้

หมายเหตุ: Repository แบบ Public ทำให้ source code และรูปภาพที่อัปโหลดมองเห็นได้สาธารณะ อย่าใส่ข้อมูลส่วนตัวหรือรูปที่ไม่ต้องการเผยแพร่ เพลงจะไม่เริ่มเอง เพราะเบราว์เซอร์ส่วนใหญ่บล็อก autoplay; ผู้เข้าชมต้องกดปุ่มเปิดเพลง
