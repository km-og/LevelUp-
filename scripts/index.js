/* этот код помечает картинки, для удобства разработки */
let i = 1;
for (let li of document.querySelectorAll("feedback__container")) {
  li.style.position = "relative";
  li.insertAdjacentHTML(
    "beforeend",
    `<span style="position:absolute;left:0;top:0">${i}</span>`
  );
  i++;
}

/* конфигурация */
let width = 500; // ширина картинки
let count = 1; // видимое количество изображений

let list = document.querySelector("feedback__gallery");
let listElems = document.querySelectorAll("feedback__container");

let position = 0; // положение ленты прокрутки

document.querySelector(".prev").onclick = function () {
  // сдвиг влево
  position += width * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0);
  list.style.marginLeft = position + "px";
};

document.querySelector(".next").onclick = function () {
  // сдвиг вправо
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + "px";
};
