import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const shopName = document.createElement('h1');
  shopName.classList.add('shop-name');
  shopName.textContent = 'Ichiraku Ramen';

  header.appendChild(shopName);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement('nav');

  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'Home';
  homeBtn.classList.add('button-nav');
  homeBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(homeBtn);
    loadHome();
  });

  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'Menu';
  menuBtn.classList.add('button-nav');
  menuBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(menuBtn);
    loadMenu();
  });

  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'Contact';
  contactBtn.classList.add('button-nav');
  contactBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(contactBtn);
    loadContact();
  });

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return nav;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll('.button-nav');

  buttons.forEach((btn) => {
    if (btn !== this) {
      btn.classList.remove('active');
    }
  });

  button.classList.add('active');
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');

  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const copyright = document.createElement('p');
  copyright.textContent = 'Copyright © 2021 Ichiraku Ramen';

  footer.appendChild(copyright);

  return footer;
}

function websiteInit() {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.querySelector('.button-nav'));
  loadHome();
}

export default websiteInit;
