function createButton(text) {
  const button = document.createElement('button');
  button.classList.add('nav-btn');
  button.textContent = text;
  return button;
}

function loadHeader() {
  const header = document.createElement('header');
  const logoContainer = document.createElement('div');
  const nav = document.createElement('nav');
  const navContainer = document.createElement('ul');

  header.classList.add('header');
  logoContainer.classList.add('logo-container');
  nav.classList.add('nav-container');
  navContainer.classList.add('nav-item-container');

  logoContainer.textContent = 'LOGO'

  const homeBtn = createButton('Home');
  const menuBtn = createButton('Menu');
  const aboutBtn = createButton('About');

  navContainer.appendChild(homeBtn);
  navContainer.appendChild(menuBtn);
  navContainer.appendChild(aboutBtn);

  nav.appendChild(navContainer);

  header.appendChild(logoContainer);
  header.appendChild(nav);

  return header;
}

export default loadHeader;