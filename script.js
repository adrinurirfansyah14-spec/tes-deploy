const btn = document.getElementById('clickBtn');
const message = document.getElementById('message');

const messages = [
    "Asik, interaksi JavaScript berjalan! 🎉",
    "Deploy di Vercel ternyata gampang banget ya!",
    "Semangat terus ngodingnya! ✨",
    "Yeay, berhasil interaksi! 🤖"
];

btn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    message.textContent = messages[randomIndex];
});