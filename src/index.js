document.querySelector('#screen1').addEventListener("load", function () {
  document.querySelector('#screen1').addEventListener('mouseover', () => changeColor(this.contentDocument, '#E3FD52', '#111111'));
  document.querySelector('#screen1').addEventListener('mouseleave', () => changeColor(this.contentDocument, '#111111', '#E3FD52'));
});

document.querySelector('#screen2').addEventListener("load", function () {
  document.querySelector('#screen2').addEventListener('mouseover', () => changeColor(this.contentDocument, '#E3FD52', '#111111'));
  document.querySelector('#screen2').addEventListener('mouseleave', () => changeColor(this.contentDocument, '#111111', '#E3FD52'));
});

document.querySelector('#screen3').addEventListener("load", function () {
  document.querySelector('#screen3').addEventListener('mouseover', () => changeColor(this.contentDocument, '#E3FD52', '#111111'));
  document.querySelector('#screen3').addEventListener('mouseleave', () => changeColor(this.contentDocument, '#111111', '#E3FD52'));
});

function changeColor(innerDocument, colorBg, colorCaption) {
  const bg = innerDocument.getElementById('svg-app-bg');
  bg.setAttribute('style',`fill:${colorBg};`);
  const caption = innerDocument.getElementById('text');
  caption.setAttribute('style',`fill:${colorCaption};`);
}