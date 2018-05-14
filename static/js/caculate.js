/* eslint-disable */
function setFontSize() {
  const width = document.documentElement.clientWidth;
  const scale = width / 750;
  const fontSize = 100 * scale;
  document.documentElement.style.fontSize = `${fontSize}px`;
}
setFontSize();
window.addEventListener('resize', setFontSize);
