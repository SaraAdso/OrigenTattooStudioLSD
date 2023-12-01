/* eslint-disable require-jsdoc */
// eslint-disable-next-line no-unused-vars
function moreInfoPiercing(name, zone, author, image) {
  document.getElementById('nombrepiercing').innerText = name;
  document.getElementById('zonapiercing').innerText = zone;
  document.getElementById('autorpiercing').innerText = author;
  document.getElementById('imagenpiercing').setAttribute('src', image);
};
