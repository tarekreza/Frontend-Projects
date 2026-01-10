const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  
  // Check if scale function exists before using it
  if (typeof scale === 'function') {
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  }
   else {
    // Fallback linear scaling if scale function is not defined
    loadText.style.opacity = 1 - (load / 100);
    bg.style.filter = `blur(${30 * (1 - load / 100)}px)`;
  }
}
