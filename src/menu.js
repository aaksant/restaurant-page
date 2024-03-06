const categories = [
  {
    group: 'Ramens',
    menuItems: [
      {
        name: 'Tonkotsu/Hakata Ramen',
        description:
          'Creamy soul-warming broth full of lip-smacking umami flavor, chewy noodles, and toppings that can include everything from tender fatty pork belly to soft boiled eggs with their golden yolk, nutty-sweet sesame seeds, earthy scallions, and crunchy bean sprouts',
        price: 25000
      }
    ]
  },
  {
    group: 'Myeons',
    menuItems: [
      {
        name: 'Ramyeon',
        description:
          'Creamy soul-warming broth full of lip-smacking umami flavor, chewy noodles, and toppings that can include everything from tender fatty pork belly to soft boiled eggs with their golden yolk, nutty-sweet sesame seeds, earthy scallions, and crunchy bean sprouts',
        price: 25000
      }
    ]
  }
];

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
  menuPrice.textContent = `Rp. ${price}`;

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

  const tabTitle = document.createElement('span');
  tabTitle.classList.add('tab-title');
  tabTitle.textContent = 'Our menu';
  tabTitleContainer.appendChild(tabTitle);

  menuWrapper.appendChild(tabTitleContainer);

  for (const category of categories) {
    const categoryElement = createCategory(category.group, category.menuItems);
    menuWrapper.appendChild(categoryElement);
  }

  return menuWrapper;
}

export default function loadMenu() {
  const main = document.querySelector('.main');
  main.innerHTML = '';
  main.appendChild(createMenuWrapper());
}
