function createUlEl() {
  const ulItem = document.createElement("ul");
  ulItem.className = "box-row";
  return ulItem;
}
function createLiEl() {
  const liItem = document.createElement("li");
  liItem.className = "box";
  return liItem;
}

const boxesContainer = document.querySelector(".boxes-container");

for (let i = 0; i < 15; i++) {
  const ulElement = createUlEl();
  for (let j = 0; j < 30; j++) {
    const liElement = createLiEl();
    ulElement.appendChild(liElement);
  }
  boxesContainer.appendChild(ulElement);
}
