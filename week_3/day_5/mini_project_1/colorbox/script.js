const drawingGrid = document.getElementById('drawing-grid');
const allColorBoxes = document.querySelectorAll('.color-box');
let selectedColor = 'black';
let isMouseDown = false;

allColorBoxes.forEach(colorBox => {
    colorBox.addEventListener('click', () => {
        selectedColor = colorBox.dataset.color;
    });
});

for (let i = 0; i < 400; i++) {
    const gridBox = document.createElement('div');
    gridBox.classList.add('grid-box');
    
    gridBox.addEventListener('mousedown', () => {
        gridBox.style.backgroundColor = selectedColor;
    });

    gridBox.addEventListener('mouseover', () => {
        if (isMouseDown) {
            gridBox.style.backgroundColor = selectedColor;
        }
    });

    drawingGrid.appendChild(gridBox);
}

document.addEventListener('mousedown', () => {
    isMouseDown = true;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});