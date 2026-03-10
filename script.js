// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  setTimeout(() => { loadingScreen.classList.add('hide'); }, 1500);
});

// ===== SLIDER =====
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index){
  slides.forEach(s=>s.classList.remove('active'));
  dots.forEach(d=>d.classList.remove('active'));
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  slideIndex = index;
}

function nextSlide(){ slideIndex=(slideIndex+1)%slides.length; showSlide(slideIndex);}
function currentSlide(index){ showSlide(index);}
setInterval(nextSlide,4000);

// ===== THEME SWITCH =====
function setTheme(color){
  document.documentElement.style.setProperty('--main', color);
  localStorage.setItem('themeColor', color);
}
const savedTheme = localStorage.getItem('themeColor');
if(savedTheme){ document.documentElement.style.setProperty('--main', savedTheme); }

// ===== AI SIMULATOR =====
function askAI(){
  const input = document.getElementById('ai-input');
  const response = document.getElementById('ai-response');
  if(!input||!response) return;
  const question=input.value.trim();
  if(question===""){ response.innerText="Silakan ketik pertanyaan Anda!"; return;}
  response.innerText="AI menjawab (demo): "+question;
  input.value="";
}