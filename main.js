(()=>{"use strict";var t=document.querySelector("#button-template").content,e=document.querySelector("#question-template").content,o=document.querySelector("#option-template").content;var n=document.querySelector(".select__shop"),l=document.querySelector(".buttons__list"),u=document.querySelector(".questions__list"),r={buttonsList:l,questionsList:u};[{buttonName:"ГТИК",questions:[{title:"Hello1?",answers:[{title:"yes",bool:!0},{title:"no",bool:!1}]},{title:"Hello2",answers:[{title:"no",bool:!0},{title:"yes",bool:!1}]}]},{buttonName:"ОТ",questions:[{title:"HelloOT1?",answers:[{title:"yesOT",bool:!0},{title:"noOT",bool:!1}]},{title:"HelloOT2?",answers:[{title:"noOT",bool:!0},{title:"yesOT",bool:!1}]}]}].forEach((function(o){var n=function(o,n){var l=t.querySelector(".button__item").cloneNode(!0),u=l.querySelector(".button__menu");return u.textContent=o.buttonName,u.addEventListener("click",(function(){n.classList.add("block__hidden"),o.questions.forEach((function(t){var o=function(t){var o=e.querySelector(".question__item").cloneNode(!0);return o.querySelector(".question__title").textContent=t.title,o}(t);n.questionsList.append(o)}))})),l}(o,r);l.append(n)})),["-- Выберите цех --","ЛПЦ-5","ЛПЦ-11"].forEach((function(t){var e=function(t){var e=o.querySelector(".option").cloneNode(!0);return e.textContent=t,e.value=t,e}(t);n.append(e)}))})();