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

const btn = document.getElementById('btnMenu');
    const close = document.getElementById('closeMenu');
    const menu = document.getElementById('mobile-menu');
    const toggle = () => menu.classList.toggle('translate-x-full');
    btn.addEventListener('click', toggle);
    close.addEventListener('click', toggle);