export default function loadHome() {
  const home = document.createElement('div');
  home.classList.add('home');

  const heroContainer = document.createElement('div');
  heroContainer.classList.add('hero-container');

  const heroTextContainer = document.createElement('div');
  heroTextContainer.classList.add('hero-text-container');

  const heroMainText = document.createElement('div');
  heroMainText.classList.add('hero-text', 'main-text');
  heroMainText.textContent = 'Forget about healthy foods';

  const menuHighlights = document.createElement('div');
  menuHighlights.classList.add('hero-text', 'menu-highlights');

  const firstText = document.createElement('span');
  firstText.classList.add('first-text');
  firstText.textContent = 'Eat some ';

  const secText = document.createElement('span');
  secText.classList.add('sec-text');
  secText.textContent = 'noodles';

  menuHighlights.appendChild(firstText);
  menuHighlights.appendChild(secText);

  heroTextContainer.appendChild(heroMainText);
  heroTextContainer.appendChild(menuHighlights);

  heroContainer.appendChild(heroTextContainer);

  home.appendChild(heroContainer);

  return home;
}
