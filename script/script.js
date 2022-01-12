'use strict';
const textHead = document.querySelectorAll('.textHead h1');
const imgs = document.querySelectorAll('.imgs img');
const [text1, text2, text3] = textHead;
makeAnime(text1, 1500);
makeAnime(text2, 2500);
makeAnime(text3, 4500);

showImg();

const year = document.getElementById('year');
const date = new Date();
year.textContent = date.getFullYear();

const exp = document.getElementById("exp");
exp.textContent = date.getFullYear() - 2021;

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

function showImg() {
  let index = 0;
  setInterval(() => {
    // clear all .img-appear class
    imgs.forEach((e) => e.classList.remove("img-appear"));
    console.log(index);
    // add class depend on current index
    imgs[index].classList.add("img-appear");
    console.log(imgs[index])
    if (index === imgs.length - 1) index = 0;
    else index++;
  }, 3500)
}