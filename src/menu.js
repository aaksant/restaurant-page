import { menu } from './menuData';

const categories = Object.entries(menu);

function createMenu(name, description, price) {
  const menuRow = document.createElement('div');
  menuRow.classList.add('menu-row');

  const menuName = document.createElement('div');
  const menuDescription = document.createElement('div');
  const menuPrice = document.createElement('div');
  menuName.classList.add('menu-name');
  menuDescription.classList.add('menu-description');
  menuPrice.classList.add('menu-price');

  menuName.textContent = name;
  menuDescription.textContent = description;
  menuPrice.textContent = `$${price}`;

  menuRow.appendChild(menuName);
  menuRow.appendChild(menuDescription);
  menuRow.appendChild(menuPrice);

  return menuRow;
}

function createCategory(group, menuItems) {
  const categoryContainer = document.createElement('div');
  categoryContainer.classList.add('category-container');

  const category = document.createElement('div');
  category.classList.add('category');

  const groupSpan = document.createElement('span');
  const menuGroup = document.createElement('em');
  groupSpan.classList.add('type');
  menuGroup.textContent = group;
  groupSpan.appendChild(menuGroup);

  const menuRowContainer = document.createElement('div');
  menuRowContainer.classList.add('menu-row-container');

  for (const item of menuItems) {
    const menuRow = createMenu(item.name, item.description, item.price);
    menuRowContainer.appendChild(menuRow);
  }

  category.appendChild(groupSpan);
  category.appendChild(menuRowContainer);

  categoryContainer.appendChild(category);

  return categoryContainer;
}

function createMenuWrapper() {
  const menuWrapper = document.createElement('div');
  menuWrapper.classList.add('menu-wrapper');

  const tabTitleContainer = document.createElement('div');
  tabTitleContainer.classList.add('tab-title-container');

  const tabTitle = document.createElement('div');
  tabTitle.classList.add('tab-title');
  tabTitle.textContent = 'Our menu';
  
  const bestSaler = document.createElement('div');
  bestSaler.classList.add('best-seller');
  bestSaler.textContent = "This week's best seller: Indomie + Iced Tea";
  
  tabTitleContainer.appendChild(tabTitle);
  tabTitleContainer.appendChild(bestSaler);

  menuWrapper.appendChild(tabTitleContainer);

  for (const [group, menuItems] of categories) {
    const categoryElement = createCategory(group, menuItems);
    menuWrapper.appendChild(categoryElement);
  }

  return menuWrapper;
}

export default function loadMenu() {
  const main = document.querySelector('.main');
  main.innerHTML = '';
  main.appendChild(createMenuWrapper());
}
