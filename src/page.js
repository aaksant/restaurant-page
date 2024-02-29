import loadHome from './home';

function loadHeader() {
  function createButton(text) {
    const li = document.createElement('li');
    const tab = document.createElement('button');

    tab.classList.add('nav-btn');
    tab.textContent = text;

    li.appendChild(tab);

    return li;
  }

  const header = document.createElement('header');
  const logoContainer = document.createElement('div');
  const nav = document.createElement('nav');
  const navItemContainer = document.createElement('ul');

  header.classList.add('header');
  logoContainer.classList.add('logo-container');
  nav.classList.add('nav-container');
  navItemContainer.classList.add('nav-item-container');

  logoContainer.textContent = 'noodlenirvana';

  const homeBtn = createButton('Home');
  const menuBtn = createButton('Menu');
  const aboutBtn = createButton('About');

  navItemContainer.appendChild(homeBtn);
  navItemContainer.appendChild(menuBtn);
  navItemContainer.appendChild(aboutBtn);

  nav.appendChild(navItemContainer);

  header.appendChild(logoContainer);
  header.appendChild(nav);

  return header;
}

function loadFooter() {
  const footer = document.createElement('footer');
  const link = document.createElement('a');

  footer.classList.add('footer');
  footer.textContent = 'Made by ';
  link.href = 'https://github.com/aaksant/restaurant-page';
  link.textContent = 'aaksant';

  footer.appendChild(link);

  return footer;
}

export default function loadPage() {
  const body = document.querySelector('body');
  const content = document.getElementById('content');

  body.appendChild(loadHeader());
  content.appendChild(loadHome());
  body.appendChild(loadFooter());
}