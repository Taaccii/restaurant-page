import createHomepage from "./home.js";
import createMenu from "./menu.js";
import createInfo from "./info.js";

const initializeWebsite = () => {
  const nav = document.querySelector('nav');
  const content = document.getElementById('content');

  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'Home';
  homeBtn.classList.add('nav-button', 'active');

  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'Menu';
  menuBtn.classList.add('nav-button');

  const infoBtn = document.createElement('button');
  infoBtn.textContent = 'Info';
  infoBtn.classList.add('nav-button');

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(infoBtn);

  content.appendChild(createHomepage());

  homeBtn.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(createHomepage());
  });

  menuBtn.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(createMenu());
  });

  infoBtn.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(createInfo());
  });

};

initializeWebsite();