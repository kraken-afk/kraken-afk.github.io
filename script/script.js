'use strict';
const textHead = document.querySelectorAll('.textHead h1');
const [text1, text2, text3] = textHead;
makeAnime(text1, 1500);
makeAnime(text2, 2500);
makeAnime(text3, 4500);

const year = document.getElementById('year');
const date = new Date();
year.textContent = date.getFullYear();


function makeAnime(el, delay) {
  const arr = el.textContent.split('');
  const span = arr.map(e => `<span class="hide">${e}</span>`);
  el.innerHTML = span.join('');
  let counter = 0;
  setTimeout(() => {
    const time = setInterval(() => {
      const span = el.children;
      clearRoot()
      span[counter].classList.add('appear', 'root');
      counter++
      if (counter >= span.length) {
        clearInterval(time);
      }
    }, 50);
  }, delay);

  function clearRoot() {
    for (let e of textHead) {
      e.childNodes.forEach(el => {
        el.classList.remove('root')
      })
    }
  }
}
