/* eslint-disable require-jsdoc */
// eslint-disable-next-line no-unused-vars
function moreInfoTattoo(name, description, size, color, techniques, author, image) {
  document.getElementById('nombretattoo').innerText = name;
  document.getElementById('descripciontattoo').innerText = description;
  document.getElementById('tamanotattoo').innerText = size;
  document.getElementById('colortattoo').innerText = color;
  document.getElementById('tecnicatattoo').innerText = techniques;
  document.getElementById('autortattoo').innerText = author;
  document.getElementById('imagentattoo').setAttribute('src', image);
}

