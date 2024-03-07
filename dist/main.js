/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction createHero() {\r\n  const heroContainer = document.createElement('div');\r\n  heroContainer.classList.add('hero-container');\r\n\r\n  const heroTextContainer = document.createElement('div');\r\n  heroTextContainer.classList.add('hero-text-container');\r\n\r\n  const heroMainText = document.createElement('div');\r\n  heroMainText.classList.add('hero-main-text');\r\n  heroMainText.textContent = 'Slurp, munch, experience';\r\n\r\n  const menuHighlights = document.createElement('div');\r\n  menuHighlights.classList.add('hero-highlights');\r\n\r\n  const firstText = document.createElement('span');\r\n  firstText.classList.add('first-text');\r\n  firstText.textContent = 'Find your favorite ';\r\n\r\n  const secText = document.createElement('span');\r\n  secText.classList.add('sec-text');\r\n  secText.textContent = 'noodles';\r\n\r\n  menuHighlights.appendChild(firstText);\r\n  menuHighlights.appendChild(secText);\r\n\r\n  heroTextContainer.appendChild(heroMainText);\r\n  heroTextContainer.appendChild(menuHighlights);\r\n\r\n  heroContainer.appendChild(heroTextContainer);\r\n\r\n  return heroContainer;\r\n}\r\n\r\nfunction loadHome() {\r\n  const home = document.createElement('div');\r\n  home.classList.add('home');\r\n  home.appendChild(createHero());\r\n\r\n  const main = document.querySelector('.main');\r\n  main.innerHTML = '';\r\n  main.appendChild(home);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ \"./src/page.js\");\n\r\n\r\n(0,_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _menuData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuData */ \"./src/menuData.js\");\n\r\n\r\nconst categories = Object.entries(_menuData__WEBPACK_IMPORTED_MODULE_0__.menu);\r\n\r\nfunction createMenu(name, description, price) {\r\n  const menuRow = document.createElement('div');\r\n  menuRow.classList.add('menu-row');\r\n\r\n  const menuName = document.createElement('div');\r\n  const menuDescription = document.createElement('div');\r\n  const menuPrice = document.createElement('div');\r\n  menuName.classList.add('menu-name');\r\n  menuDescription.classList.add('menu-description');\r\n  menuPrice.classList.add('menu-price');\r\n\r\n  menuName.textContent = name;\r\n  menuDescription.textContent = description;\r\n  menuPrice.textContent = `$${price}`;\r\n\r\n  menuRow.appendChild(menuName);\r\n  menuRow.appendChild(menuDescription);\r\n  menuRow.appendChild(menuPrice);\r\n\r\n  return menuRow;\r\n}\r\n\r\nfunction createCategory(group, menuItems) {\r\n  const categoryContainer = document.createElement('div');\r\n  categoryContainer.classList.add('category-container');\r\n\r\n  const category = document.createElement('div');\r\n  category.classList.add('category');\r\n\r\n  const groupSpan = document.createElement('span');\r\n  const menuGroup = document.createElement('em');\r\n  groupSpan.classList.add('type');\r\n  menuGroup.textContent = group;\r\n  groupSpan.appendChild(menuGroup);\r\n\r\n  const menuRowContainer = document.createElement('div');\r\n  menuRowContainer.classList.add('menu-row-container');\r\n\r\n  for (const item of menuItems) {\r\n    const menuRow = createMenu(item.name, item.description, item.price);\r\n    menuRowContainer.appendChild(menuRow);\r\n  }\r\n\r\n  category.appendChild(groupSpan);\r\n  category.appendChild(menuRowContainer);\r\n\r\n  categoryContainer.appendChild(category);\r\n\r\n  return categoryContainer;\r\n}\r\n\r\nfunction createMenuWrapper() {\r\n  const menuWrapper = document.createElement('div');\r\n  menuWrapper.classList.add('menu-wrapper');\r\n\r\n  const tabTitleContainer = document.createElement('div');\r\n  tabTitleContainer.classList.add('tab-title-container');\r\n\r\n  const tabTitle = document.createElement('div');\r\n  tabTitle.classList.add('tab-title');\r\n  tabTitle.textContent = 'Our menu';\r\n  \r\n  const bestSaler = document.createElement('div');\r\n  bestSaler.classList.add('best-seller');\r\n  bestSaler.textContent = \"This week's best seller: Indomie + Iced Tea\";\r\n  \r\n  tabTitleContainer.appendChild(tabTitle);\r\n  tabTitleContainer.appendChild(bestSaler);\r\n\r\n  menuWrapper.appendChild(tabTitleContainer);\r\n\r\n  for (const [group, menuItems] of categories) {\r\n    const categoryElement = createCategory(group, menuItems);\r\n    menuWrapper.appendChild(categoryElement);\r\n  }\r\n\r\n  return menuWrapper;\r\n}\r\n\r\nfunction loadMenu() {\r\n  const main = document.querySelector('.main');\r\n  main.innerHTML = '';\r\n  main.appendChild(createMenuWrapper());\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/menuData.js":
/*!*************************!*\
  !*** ./src/menuData.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\n// menuData.js\r\nconst menu = {\r\n  ヌードル: [\r\n    {\r\n      name: 'Tonkotsu Ramen',\r\n      description:\r\n        'Rich and creamy pork bone broth with chashu (braised pork belly), menma (bamboo shoots), green onions, and a soft-boiled egg.',\r\n      price: 12.99\r\n    },\r\n    {\r\n      name: 'Shoyu Ramen',\r\n      description:\r\n        'Flavorful soy sauce-based broth with chashu, menma, green onions, and a soft-boiled egg.',\r\n      price: 11.99\r\n    },\r\n    {\r\n      name: 'Miso Ramen',\r\n      description:\r\n        'Hearty and savory miso-based broth with chashu, corn, green onions, and a soft-boiled egg.',\r\n      price: 12.49\r\n    },\r\n    {\r\n      name: 'Shio Ramen',\r\n      description:\r\n        'Simple yet delicious salt-based broth with chashu, menma, green onions, and a soft-boiled egg.',\r\n      price: 10.99\r\n    },\r\n    {\r\n      name: 'Spicy Miso Ramen',\r\n      description:\r\n        'Miso-based broth with a kick of spice, topped with chashu, corn, green onions, and a soft-boiled egg.',\r\n      price: 13.49\r\n    },\r\n    {\r\n      name: 'Kake Udon',\r\n      description:\r\n        'Thick, chewy udon noodles in a warm and flavorful dashi broth, topped with tempura crumbs.',\r\n      price: 9.99\r\n    },\r\n    {\r\n      name: 'Zaru Soba',\r\n      description:\r\n        'Cold soba noodles served with a dipping sauce, wasabi, and nori (seaweed) on the side.',\r\n      price: 11.49\r\n    },\r\n    {\r\n      name: 'Yakisoba',\r\n      description:\r\n        'Stir-fried wheat noodles with vegetables and your choice of protein (chicken, beef, or shrimp).',\r\n      price: 13.99\r\n    }\r\n  ],\r\n  面条: [\r\n    {\r\n      name: 'Beef Chow Fun',\r\n      description:\r\n        'Wide rice noodles stir-fried with beef, bean sprouts, and scallions in a savory sauce.',\r\n      price: 11.99\r\n    },\r\n    {\r\n      name: 'Singapore Noodles',\r\n      description:\r\n        'Curried rice vermicelli noodles with shrimp, pork, vegetables, and a tangy sauce.',\r\n      price: 12.49\r\n    },\r\n    {\r\n      name: 'Dan Dan Noodles',\r\n      description:\r\n        'Spicy Sichuan-style noodles with ground pork, chili oil, and preserved vegetables.',\r\n      price: 10.99\r\n    },\r\n    {\r\n      name: 'Vegetable Lo Mein',\r\n      description:\r\n        'Stir-fried egg noodles with a variety of fresh vegetables and a savory sauce.',\r\n      price: 9.99\r\n    },\r\n    {\r\n      name: 'Kung Pao Chicken Noodles',\r\n      description:\r\n        'Spicy Szechuan-style noodles with chicken, peanuts, vegetables, and a tangy sauce.',\r\n      price: 12.99\r\n    },\r\n    {\r\n      name: 'Pad Thai',\r\n      description:\r\n        'Classic Thai-style stir-fried rice noodles with shrimp, egg, bean sprouts, and crushed peanuts.',\r\n      price: 13.49\r\n    },\r\n    {\r\n      name: 'Beef Ho Fun',\r\n      description:\r\n        'Flat rice noodles stir-fried with beef, vegetables, and a savory sauce.',\r\n      price: 11.99\r\n    }\r\n  ],\r\n  국수: [\r\n    {\r\n      name: 'Jajangmyeon',\r\n      description:\r\n        'Thick wheat noodles topped with a savory black bean sauce, vegetables, and your choice of protein (beef, pork, or seafood).',\r\n      price: 12.99\r\n    },\r\n    {\r\n      name: 'Japchae',\r\n      description:\r\n        'Sweet potato noodles stir-fried with vegetables and your choice of protein (beef, chicken, or tofu).',\r\n      price: 11.49\r\n    },\r\n    {\r\n      name: 'Kalguksu',\r\n      description:\r\n        'Handmade knife-cut noodles in a flavorful broth with vegetables and your choice of protein (beef, chicken, or seafood).',\r\n      price: 13.99\r\n    },\r\n    {\r\n      name: 'Naengmyeon',\r\n      description:\r\n        'Cold buckwheat noodles in a chilled broth, topped with cucumber, egg, and your choice of protein.',\r\n      price: 12.49\r\n    },\r\n    {\r\n      name: 'Dak Kalguksu',\r\n      description:\r\n        'Knife-cut wheat noodles served in a rich and hearty chicken broth with shredded chicken, vegetables, and sometimes garnished with sesame seeds and green onions.',\r\n      price: 11.99\r\n    },\r\n    {\r\n      name: 'Bibim Guksu',\r\n      description:\r\n        'Spicy mixed noodles with a flavorful gochujang-based sauce, fresh vegetables, and your choice of protein (beef, chicken, or tofu).',\r\n      price: 10.99\r\n    }\r\n  ],\r\n  Mi: [\r\n    {\r\n      name: 'Bihun Goreng',\r\n      description:\r\n        'Stir-fried rice vermiceli tossed in a savory blend of soy sauce, garlic, and your choice of protein (chicken, prawns, or tofu).',\r\n      price: 9.99\r\n    },\r\n    {\r\n      name: 'Capcay',\r\n      description:\r\n        'Stir-fried broccoli, carrots, mushrooms, and baby corn. Wok-tossed in a savory sauce. Choose your protein (chicken, prawns, or beef).',\r\n      price: 12.49\r\n    },\r\n    {\r\n      name: 'Mie Ayam',\r\n      description:\r\n        'Thin egg noodles topped with succulent shredded chicken, bok choy, and green onions. Drizzled with a savory soy-based sauce and served with a side of clear chicken broth.',\r\n      price: 10.99\r\n    },\r\n    {\r\n      name: 'Yamien',\r\n      description:\r\n        'Chewy egg noodles in a rich and flavorful broth. Topped with your choice of protein (chicken, prawns, or beef), bok choy, and garnished with fried shallots.',\r\n      price: 11.49\r\n    },\r\n    {\r\n      name: 'Bakmi Goreng',\r\n      description:\r\n        'Stir-fried yellow egg noodles in a delightful blend of sweet soy sauce, garlic, and shallots. Tossed with your choice of protein (chicken, prawns, or beef) and crisp vegetables. Garnished with fried shallots and served with fresh lime or cucumber slices.',\r\n      price: 9.99\r\n    },\r\n    {\r\n      name: 'Bakmi Godok',\r\n      description:\r\n        'Stir-fried yellow egg noodles in  chicken or beef broth, accompanied by shredded chicken, bok choy, bean sprout, and your choice of protein (chicken, beef, lamb).',\r\n      price: 9.99\r\n    },\r\n    {\r\n      name: 'Kwetiau Goreng',\r\n      description:\r\n        'Flat rice noodles are wok-fried to perfection with soy sauce, garlic, and a selection of protein options such as chicken, prawns, or beef. Mixed with crisp vegetables like bell peppers and Chinese broccoli.',\r\n      price: 10.49\r\n    },\r\n    {\r\n      name: 'Kwetiau Godok',\r\n      description:\r\n        'Flat rice noodles in a light and flavorful broth, accompanied by tender pieces of shredded chicken, leafy bok choy, and bean sprouts.',\r\n      price: 10.49\r\n    }\r\n  ],\r\n  'Instant Noodles': [\r\n    {\r\n      name: 'Indomie Mi Goreng',\r\n      description:\r\n        'The pride of Indonesian. Fried noodle with sweet-salty, umami-packed treat thanks to not one but five flavor packets: seasoning powder, seasoning oil, sweet soy sauce, chili sauce, and fried shallots. Add a fried egg and day is perfect.',\r\n      price: 4.0\r\n    },\r\n    {\r\n      name: 'Samyang Buldak',\r\n      description:\r\n        'Chewy ramen noodles coated spicy sauce. Enhanced with flavors of garlic, soy sauce, and a hint of sweetness.',\r\n      price: 9.00\r\n    },\r\n    {\r\n      name: 'Nongshim Shin Ramyun',\r\n      description:\r\n        'Chewy noodles with rich and robust flavor. The wheat noodles are immersed in a spicy broth, featuring a blend of beef, garlic, and aromatic spices.',\r\n      price: 9.00\r\n    }\r\n  ],\r\n  Beverage: [\r\n    {\r\n      name: 'Mineral Water',\r\n      description: 'Covers 70% of the Eearf(?)',\r\n      price: 0.49\r\n    },\r\n    {\r\n      name: 'Iced Tea',\r\n      description: 'Everybody knows, everybody loves it.',\r\n      price: 1.49\r\n    },\r\n    {\r\n      name: 'Iced Coffe',\r\n      description: 'Everybody knows, everybody loves it.',\r\n      price: 1.99\r\n    }\r\n  ]\r\n};\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menuData.js?");

/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\r\n\r\n\r\nfunction setCurrentTab(tab) {\r\n  const tabs = document.querySelectorAll('.nav-btn');\r\n\r\n  tabs.forEach((tab) => {\r\n    if (tab !== this) {\r\n      tab.classList.remove('is-active');\r\n    }\r\n  });\r\n\r\n  tab.classList.add('is-active');\r\n}\r\n\r\nfunction loadNav() {\r\n  function createTab(text) {\r\n    const li = document.createElement('li');\r\n    const tab = document.createElement('button');\r\n\r\n    tab.classList.add('nav-btn');\r\n    tab.textContent = text;\r\n\r\n    li.appendChild(tab);\r\n\r\n    return li;\r\n  }\r\n\r\n  const nav = document.createElement('nav');\r\n  const navItemContainer = document.createElement('ul');\r\n\r\n  nav.classList.add('nav-container');\r\n  navItemContainer.classList.add('nav-item-container');\r\n\r\n  const homeTab = createTab('Home');\r\n  homeTab.addEventListener('click', (e) => {\r\n    if (e.target.classList.contains('is-active')) {\r\n      e.preventDefault();\r\n    } else {\r\n      setCurrentTab(homeTab);\r\n      (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    }\r\n  });\r\n\r\n  const menuTab = createTab('Menu');\r\n  menuTab.addEventListener('click', (e) => {\r\n    if (e.target.classList.contains('is-active')) {\r\n      e.preventDefault();\r\n    } else {\r\n      setCurrentTab(menuTab);\r\n      (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    }\r\n  });\r\n\r\n  const aboutTab = createTab('About us');\r\n  aboutTab.addEventListener('click', (e) => {\r\n    if (e.target.classList.contains('is-active')) {\r\n      e.preventDefault();\r\n    } else {\r\n      setCurrentTab(aboutTab);\r\n      // loadAbout();\r\n    }\r\n  });\r\n\r\n  navItemContainer.appendChild(homeTab);\r\n  navItemContainer.appendChild(menuTab);\r\n  navItemContainer.appendChild(aboutTab);\r\n\r\n  nav.appendChild(navItemContainer);\r\n\r\n  return nav;\r\n}\r\n\r\nfunction loadHeader() {\r\n  const header = document.createElement('header');\r\n  const logoContainer = document.createElement('div');\r\n\r\n  header.classList.add('header');\r\n  logoContainer.classList.add('logo-container');\r\n\r\n  logoContainer.textContent = 'noodlenirvana.com';\r\n\r\n  header.appendChild(logoContainer);\r\n  header.appendChild(loadNav());\r\n\r\n  return header;\r\n}\r\n\r\nfunction loadMain() {\r\n  const main = document.createElement('main');\r\n  main.classList.add('main');\r\n\r\n  return main;\r\n}\r\n\r\nfunction loadFooter() {\r\n  const footer = document.createElement('footer');\r\n  const span = document.createElement('span');\r\n  const link = document.createElement('a');\r\n\r\n  footer.classList.add('footer');\r\n  span.classList.add('trademarks');\r\n\r\n  span.textContent = 'Made by ';\r\n  link.href = 'https://github.com/aaksant/restaurant-page';\r\n  link.textContent = 'aaksant';\r\n\r\n  footer.appendChild(span);\r\n  footer.appendChild(link);\r\n\r\n  return footer;\r\n}\r\n\r\nfunction loadPage() {\r\n  const content = document.getElementById('content');\r\n\r\n  content.appendChild(loadHeader());\r\n  content.appendChild(loadMain());\r\n  content.appendChild(loadFooter());\r\n\r\n  setCurrentTab(document.querySelector('.nav-btn'));\r\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/page.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;