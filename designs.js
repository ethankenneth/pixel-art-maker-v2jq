$(document).ready(function() {

// Define initial variables
  let height = $('#inputHeight');
  let width = $('#inputWidth');
  let pixelCanvas = $('#pixelCanvas');
  let colorPicker = $('#colorPicker');

// Select size input
  let sizePicker = $('#sizePicker');
  sizePicker.submit(function(s) {
    s.preventDefault();
    let heightVal = height.val();
    let widthVal = width.val();
    makeGrid(heightVal, widthVal);
  });// End sizePicker

// When size is submitted by the user, call makeGrid()
// Grid is being created and cleared dynamically
  function makeGrid(height, width) {
// Grid is cleared
    pixelCanvas.empty();
// Create new grid
// Create rows
    for (let row = 0; row < height; row++) {
      let tableRow = $('<tr></tr>');
// Create columns
      for (let col = 0; col < width; col++) {
        let tableCell = $('<td></td>');
// Append table data to create grid
        tableRow.append(tableCell);
      }// End col for loop
      pixelCanvas.append(tableRow);
    }// End row for loop
  }// End makeGrid function

// Add color to cell when clicked
  pixelCanvas.on('click', 'td', function() {
    let colorVal = colorPicker.val();
    $(this).css('background-color', colorVal);
  });// End coloring function

// You can remove a cell color by clicking on it again (or using double-click event)
  pixelCanvas.on('dblclick', 'td', function() {
    $(this).css('background-color', '');
  });// End double click to erase

// Mousedown for color
  let mouseDown = false;
  pixelCanvas.mousedown(function() {
    mouseDown = true;
  });// End mousedown true
  pixelCanvas.mouseup(function() {
    mouseDown = false;
  });// End mousedown for color

// Use mouse dragging to color multiple pixel’s at once (Brush feature)
  pixelCanvas.on('mousemove', 'td', function(paint) {
    paint.preventDefault();
    let colorVal = colorPicker.val();
    if (mouseDown) {
      $(this).css('background-color', colorVal);
    }// End mousedown if
  });// End paint function

}); // End document ready function
