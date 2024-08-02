const buttonTemplate = document.querySelector('#button-template').content;
const questionTemplate = document.querySelector('#question-template').content;
const optionTemplate = document.querySelector('#option-template').content;

export function createButton(object, lists) {
  const buttonElement = buttonTemplate.querySelector('.button__item').cloneNode(true);
  const button = buttonElement.querySelector('.button__menu');

  button.textContent = object.buttonName;

  button.addEventListener('click', () => {
    lists.classList.add('block__hidden');

    object.questions.forEach(question => {
      const newQuestion = createQuestion(question);
      lists.questionsList.append(newQuestion);
    });
  });

  return buttonElement;
}

function createQuestion(question) {
  const questionElement = questionTemplate.querySelector('.question__item').cloneNode(true);
  const questionTitle = questionElement.querySelector('.question__title');
  
  questionTitle.textContent = question.title;

  return questionElement;
}

export function createOption(shop) {
  const optionElement = optionTemplate.querySelector('.option').cloneNode(true);
  
  optionElement.textContent = shop;
  optionElement.value = shop;

  return optionElement;
}