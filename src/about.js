function createAboutWrapper() {
  const aboutWrapper = document.createElement('div');
  aboutWrapper.classList.add('about-wrapper');

  const tabTitleContainer = document.createElement('div');
  tabTitleContainer.classList.add('tab-title-container');

  const tabTitle = document.createElement('div');
  tabTitle.classList.add('tab-title');
  tabTitle.textContent = 'About us';

  tabTitleContainer.appendChild(tabTitle);

  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('about-container');

  const aboutText = document.createElement('p');
  aboutText.classList.add('about-text');
  aboutText.textContent =
    'Welcome to Noodle Nirvana, where passion for noodles meets culinary excellence! At Noodle Nirvana, we believe that the art of noodle-making is a journey that transcends the ordinary and embraces the extraordinary. Our culinary adventure began with a simple idea – to create a haven for noodle lovers, where every strand tells a story and every bowl is a masterpiece.\n\nEstablished with a deep appreciation for the diverse world of noodles, Noodle Nirvana takes pride in offering a menu that celebrates the rich tapestry of global noodle traditions. Each dish is a testament to our commitment to authenticity and innovation.\n\nOur chefs, trained in the intricacies of noodle craftsmanship.';

  aboutContainer.appendChild(aboutText);

  aboutWrapper.appendChild(tabTitleContainer);
  aboutWrapper.appendChild(aboutContainer);

  return aboutWrapper;
}

export default function loadAbout() {
  const main = document.querySelector('.main');
  main.innerHTML = '';
  main.appendChild(createAboutWrapper());
}