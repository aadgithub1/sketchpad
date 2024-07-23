let container = document.querySelector('#grid-container')
let selectDimensionsBtn = document.querySelector('button')
const MAX_GRID_SIZE = 1000 //px

function renderGrid(numRowsAndCols = 16){
    let tileHeight = MAX_GRID_SIZE / numRowsAndCols
    let tileWidth = MAX_GRID_SIZE / numRowsAndCols
    for (let i = 0; i < numRowsAndCols; i++){
        let currentRow = document.createElement('div')
        for (let j = 0; j < numRowsAndCols; j++){
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
}
selectDimensionsBtn.addEventListener('click', function(){
    let newGridDimensions = 101
    while (newGridDimensions > 100){
        newGridDimensions = prompt('Enter the new height and width of the grid, up to 100:')
    }
    container.innerHTML = ''
    renderGrid(newGridDimensions)
})
renderGrid()
