import '../pages/index.css';

import { data } from './data';
import { createButton, createOption } from './card';

const select = document.querySelector('.select__shop');
const buttonsList = document.querySelector('.buttons__list');
const questionsList = document.querySelector('.questions__list');


const lists = { buttonsList, questionsList }

const shops = ['-- Выберите цех --', 'ЛПЦ-5', 'ЛПЦ-11']

data.forEach(object => {
  const newButton = createButton(object, lists);
  buttonsList.append(newButton);
});

shops.forEach(shop => {
  const newOption = createOption(shop);
  select.append(newOption);
})