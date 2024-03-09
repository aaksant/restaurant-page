import loadHome from './home';
import loadMenu from './menu';
import loadAbout from './about';

function setCurrentTab(tab) {
  const tabs = document.querySelectorAll('.nav-btn');

  tabs.forEach((tab) => {
    if (tab !== this) {
      tab.classList.remove('is-active');
    }
  });

  tab.classList.add('is-active');
}

function loadNav() {
  function createTab(text) {
    const li = document.createElement('li');
    const tab = document.createElement('button');

    tab.classList.add('nav-btn');
    tab.textContent = text;

    li.appendChild(tab);

    return li;
  }

  const nav = document.createElement('nav');
  const navItemContainer = document.createElement('ul');

  nav.classList.add('nav-container');
  navItemContainer.classList.add('nav-item-container');

  const homeTab = createTab('Home');
  homeTab.addEventListener('click', (e) => {
    if (e.target.classList.contains('is-active')) {
      e.preventDefault();
    } else {
      setCurrentTab(homeTab);
      loadHome();
    }
  });

  const menuTab = createTab('Menu');
  menuTab.addEventListener('click', (e) => {
    if (e.target.classList.contains('is-active')) {
      e.preventDefault();
    } else {
      setCurrentTab(menuTab);
      loadMenu();
    }
  });

  const aboutTab = createTab('About us');
  aboutTab.addEventListener('click', (e) => {
    if (e.target.classList.contains('is-active')) {
      e.preventDefault();
    } else {
      setCurrentTab(aboutTab);
      loadAbout();
    }
  });

  navItemContainer.appendChild(homeTab);
  navItemContainer.appendChild(menuTab);
  navItemContainer.appendChild(aboutTab);

  nav.appendChild(navItemContainer);

  return nav;
}

function loadHeader() {
  const header = document.createElement('header');
  const logoContainer = document.createElement('div');

  header.classList.add('header');
  logoContainer.classList.add('logo-container');

  logoContainer.textContent = 'noodlenirvana.com';

  header.appendChild(logoContainer);
  header.appendChild(loadNav());

  return header;
}

function loadMain() {
  const main = document.createElement('main');
  main.classList.add('main');

  return main;
}

function loadFooter() {
  const footer = document.createElement('footer');
  const span = document.createElement('span');
  const link = document.createElement('a');

  footer.classList.add('footer');
  span.classList.add('trademarks');

  span.textContent = 'Made by ';
  link.href = 'https://github.com/aaksant/restaurant-page';
  link.textContent = 'aaksant';

  footer.appendChild(span);
  footer.appendChild(link);

  return footer;
}

export default function loadPage() {
  const content = document.getElementById('content');

  content.appendChild(loadHeader());
  content.appendChild(loadMain());
  content.appendChild(loadFooter());

  setCurrentTab(document.querySelector('.nav-btn'));
  loadHome();
}
