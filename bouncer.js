// Canvas variables
var canvas = document.getElementById("bouncer");
var context = canvas.getContext("2d");

// Make canvas the size of the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Image variables
var image = new Image();

// How many pixels we should shake by
var velocity = 2;
var interval = 1;

// Location information
var locationX;
var locationY;

// Velocity information
var velocityX;
var velocityY;

function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	results = regex.exec(location.search);
	return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function drawFrame() {

    // Draw the image
    context.drawImage(image, locationX, locationY);

    // Move the image
    locationX += velocityX;
    locationY += velocityY;

    // If the location is at the edge, bounce!
    if (locationX >= (canvas.width - image.width) || locationX <= 0) {
        velocityX = -1 * velocityX;
    }

    if (locationY >= (canvas.height - image.height) || locationY <= 0) {
        velocityY = -1 * velocityY;
    }
}

image.onload = function() {
    locationX = 0;
    locationY = 0;
    velocityX = velocity;
    velocityY = velocity;
	setInterval(drawFrame, interval);
};

image.src = getParameterByName("imagelink");
