import source from '../views/menu.hbs';
import data from './menu.json';

const menu = document.querySelector('ul.js-menu');

const murkup = source(data);
menu.innerHTML = murkup;
