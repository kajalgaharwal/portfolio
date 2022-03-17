const bars = document.getElementById('bars');
const nav = document.getElementById('nav');
const images = document.getElementById('images');
bars.addEventListener('click', () => {
  nav.classList.toggle('active');
  bars.classList.toggle('active');
  images.classList.toggle('posdown');
});
