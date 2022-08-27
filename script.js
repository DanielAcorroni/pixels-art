function createGrid(number) {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let counter = 0; counter < number; counter += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    for (let c = 0; c < number; c += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
    pixelBoard.appendChild(line);
  }
}

function addClass(elementOrigin) {
  const element = elementOrigin.target;

  const currentClass = document.querySelector('.selected');

  if (document.getElementsByClassName('selected').length >= 1) {
    currentClass.classList.remove('selected');
  }

  element.classList.add('selected');
}

function changePixelColor(elementOrigin) {
  const element = elementOrigin.target;
  const selected = document.querySelector('.selected');
  const cssProp = window.getComputedStyle(selected);
  const color = cssProp.getPropertyValue('background-color');
  element.style.setProperty('background-color', color);
}

function clearBoard() {
  const pixel = document.getElementsByClassName('pixel');
  for (let counter = 0; counter < pixel.length; counter += 1) {
    const change = pixel[counter];
    change.style.backgroundColor = 'white';
  }
}

function changeGridSize() {
  const numberOfPixels = document.getElementById('grid-size').value;
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.innerHTML = '';
  createGrid(numberOfPixels);
  const pixel = document.getElementsByClassName('pixel');
  for (let counter = 0; counter < pixel.length; counter += 1) {
    const add = pixel[counter];
    add.addEventListener('click', changePixelColor);
  }
}

createGrid(5);
window.onload = () => {
  const colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', addClass);

  const pixel = document.getElementsByClassName('pixel');
  for (let counter = 0; counter < pixel.length; counter += 1) {
    const add = pixel[counter];
    add.addEventListener('click', changePixelColor);
  }

  const clearBtn = document.querySelector('#clear-board');
  clearBtn.addEventListener('click', clearBoard);

  const changeSizeBtn = document.querySelector('#change-size');
  changeSizeBtn.addEventListener('click', changeGridSize);
};
