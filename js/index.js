// Active States Logic

const links = document.querySelectorAll(".navLinks a");
const currentPage = window.location.pathname.split("/").pop() || "index.html";

links.forEach((link) => {
  const linkAttribute = link.getAttribute("href");
  
  if (linkAttribute === currentPage) {
    link.classList.add("text-rose-500");
    link.classList.add("before:w-full");
  } else {
    link.classList.remove("text-rose-500");
    link.classList.remove("before:w-full");
  }
});

// Mobile Menu Logic

const btnMenu = document.getElementById('btnMenu');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('mobile-menu');

btnMenu.addEventListener('click', () => {
  menu.classList.remove('translate-x-full', 'opacity-0', 'pointer-events-none');
});

closeMenu.addEventListener('click', () => {
  menu.classList.add('translate-x-full', 'opacity-0', 'pointer-events-none');
});