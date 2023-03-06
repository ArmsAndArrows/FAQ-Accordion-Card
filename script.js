const items = document.getElementsByClassName("accordion__title");

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function() {
    // Remove active class from all other elements
    for (let j = 0; j < items.length; j++) {
      if (j !== i) {
        items[j].nextElementSibling.classList.remove("accordion__content--active");
        items[j].children[0].classList.remove("accordion__heading--active");
        items[j].children[1].classList.remove("accordion__icon--active");
      }
    }
    // Toggle active class on currently selected element
    items[i].nextElementSibling.classList.toggle("accordion__content--active");
    items[i].children[0].classList.toggle("accordion__heading--active");
    items[i].children[1].classList.toggle("accordion__icon--active");
  });
}

