function loadHero() {
  const heroContainer = document.createElement('div');
  heroContainer.classList.add('hero-container');

  const heroTextContainer = document.createElement('div');
  heroTextContainer.classList.add('hero-text-container');

  const heroMainText = document.createElement('div');
  heroMainText.classList.add('hero-main-text');
  heroMainText.textContent = 'Slurp, munch, experience';

  const menuHighlights = document.createElement('div');
  menuHighlights.classList.add('hero-highlights');

  const firstText = document.createElement('span');
  firstText.classList.add('first-text');
  firstText.textContent = 'Find your favorite ';

  const secText = document.createElement('span');
  secText.classList.add('sec-text');
  secText.textContent = 'noodles';

  menuHighlights.appendChild(firstText);
  menuHighlights.appendChild(secText);

  heroTextContainer.appendChild(heroMainText);
  heroTextContainer.appendChild(menuHighlights);

  heroContainer.appendChild(heroTextContainer);

  return heroContainer;
}

export default function loadHome() {
  const home = document.createElement('div');
  home.classList.add('home');
  home.appendChild(loadHero());

  const main = document.querySelector('.main');
  main.appendChild(home);
}
