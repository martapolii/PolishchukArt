// Created an overlay that opens in response to clicking on a painting in the gallery. Will contain painting information and a full-size image of the painting.

function createOverlay(event)
{
  // prevent default action:
  event.preventDefault();

// getting the clicked image:
let clickedImage = event.target;

//creating the overlay:
let overlay = document.createElement("div");
overlay.id = "lbOverlay";

//adding a figure box to the overlay
let figureBox = document.createElement("figure");
overlay.appendChild(figureBox);

//adding image to the overlay
let overlayImage = this.cloneNode ("true");
figureBox.appendChild(overlayImage);

// adding captions
let overlayCaption = document.createElement("figcaption");
overlayCaption.textContent = this.alt; // specifies that alt text should be displayed as caption
figureBox.appendChild(overlayCaption);

// adding a Close button to the overlay:
let closeBox = document.createElement("div"); // creating element for button
closeBox.id = "lbOverlayClose";
closeBox.innerHTML = "&times;" // adding HTML for button symbol (an x)
closeBox.onclick = function () { //adding an event handler to close the overlay in response to an onclick event
  document.body.removeChild(overlay);
};
overlay.appendChild(closeBox); // appending button to the overlay or it won't show
document.body.appendChild(overlay); //appending overlay to the html body
}

// Attach event listeners to each gallery image
document.querySelectorAll('.gallery-image').forEach(function(image) {
  image.addEventListener('click', createOverlay);
});