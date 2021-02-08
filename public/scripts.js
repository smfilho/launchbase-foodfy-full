/*-----------For active class content on header-----------*/
const currentPage = location.pathname;
const menuItems = document.querySelectorAll('li a');

for (item of menuItems) {
  if (currentPage.includes(item.getAttribute('href'))) {
    item.classList.add('active');
  }
}
/*--------------------------------------------------------*/ 
const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener("click", function() {
    const cardId = card.getAttribute('id');
    window.location.href = `/recipes/${cardId}`;
  });
}
/*--------------------------------------------------------------------*/ 
const cardsAdm = document.querySelectorAll('.card-admin');

for (let card of cardsAdm) {
  card.addEventListener("click", function() {
    const cardId = card.getAttribute('id');
    window.location.href = `/admin/recipes/${cardId}`;
  });
}
/*--------------------------------------------------------------------*/ 
const visibility = document.querySelectorAll(".visibility"); //content
const spanClk = document.querySelectorAll(".btn-span"); //btn span

for (let index = 0; index <= spanClk.length; index++) {
  if(spanClk[index]) {
    spanClk[index].addEventListener("click", () => {
      if (visibility[index].classList.contains("hide")) {
        visibility[index].classList.remove("hide");
        spanClk[index].innerHTML = 'ESCONDER';
      } else {
        visibility[index].classList.add("hide");
        spanClk[index].innerHTML = 'MOSTRAR';
      }
    });
  }
}
/*--------------------------------------------------------------------*/ 
function addIngredient() {
  const ingredients = document.querySelector("#ingredients");
  const fieldContainer = document.querySelectorAll(".ingredient");

  // Clone text field from .ingredient
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
  // if no text, no new field!
  if (newField.children[0].value == "") return false;

  // clear the new text input and append it
  newField.children[0].value = "";
  ingredients.appendChild(newField);
}

document
  .querySelector(".add-ingredient")
  .addEventListener("click", addIngredient);
/*--------------------------------------------------------------------*/ 
function addStep() {
  const steps = document.querySelector("#steps");
  const fieldContainer = document.querySelectorAll(".step");

  // Clone text field from .step
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
  // if no text, no new field!
  if (newField.children[0].value == "") return false;

  // clear the new text input and append it
  newField.children[0].value = "";
  steps.appendChild(newField);
}

document
  .querySelector(".add-step")
  .addEventListener("click", addStep);
/*--------------------------------------------------------------------*/ 
