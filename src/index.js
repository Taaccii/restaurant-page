import './style.css';
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

  const setActivationButton = (activeBtn) => {
    const buttons = [homeBtn, menuBtn, infoBtn];
    buttons.forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
  };

  homeBtn.addEventListener('click', () => {
    setActivationButton(homeBtn);
    content.innerHTML = '';
    content.appendChild(createHomepage());
  });

  menuBtn.addEventListener('click', () => {
    setActivationButton(menuBtn);
    content.innerHTML = '';
    content.appendChild(createMenu());
  });

  infoBtn.addEventListener('click', () => {
    setActivationButton(infoBtn);
    content.innerHTML = '';
    content.appendChild(createInfo());
  });

  setActivationButton(homeBtn);

};

initializeWebsite();