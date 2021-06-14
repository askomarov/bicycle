/* eslint-env es6 */
'use strict';
//  ////////////// меню бургер
const headerMenu = document.querySelector('.header-menu');
const menuButton = document.querySelector('.menu-button');


const showMenu = () => {
  document.body.classList.add('lock');
  menuButton.setAttribute('aria-expanded', 'true');
  menuButton.setAttribute('aria-label', 'закрыть меню');
  headerMenu.classList.remove('header-menu--closed');
  headerMenu.classList.add('header-menu--opened');
};

const closeMenu = () => {
  document.body.classList.remove('lock');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'открыть меню');
  headerMenu.classList.add('header-menu--closed');
  headerMenu.classList.remove('header-menu--opened');
};

// //////////////// КОНЕЦ меню бургер

const onMenuLinkClickCloseMenu = (evt) => {
  if (evt.target.classList.contains('header-menu__link')) {
    closeMenu();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('page--no-js');
  headerMenu.classList.remove('header-menu--no-js');
  headerMenu.classList.add('header-menu--closed');

  menuButton.addEventListener('click', () => {
    if (headerMenu.classList.contains('header-menu--closed')) {
      showMenu();
      headerMenu.addEventListener('click', onMenuLinkClickCloseMenu);
    } else {
      closeMenu();
      headerMenu.removeEventListener('click', onMenuLinkClickCloseMenu);
    }
  });
});
