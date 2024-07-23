let container = document.querySelector('#grid-container')
const MAX_GRID_SIZE = 1000 //px
let numRows = 16
let numCols = 16
let tileHeight = MAX_GRID_SIZE / numRows
let tileWidth = MAX_GRID_SIZE / numCols

for (let i = 0; i < numRows; i++){
    let currentRow = document.createElement('div')
    for (let j = 0; j < numCols; j++){
        let currentTile = document.createElement('div')
        currentTile.setAttribute('class', 'tile')
        currentTile.style.height = `${tileHeight}px`
        currentTile.style.width = `${tileWidth}px`
        currentTile.addEventListener('mouseover', function(){
            this.setAttribute('class', 'dark')
        })
        currentRow.appendChild(currentTile)
    }
    container.appendChild(currentRow)
}


