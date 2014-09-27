// Canvas variables
var canvas = document.getElementById("bouncer");
var context = canvas.getContext("2d");

// Make canvas the size of the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Image variables
var image = new Image();

// How many pixels we should shake by
var interval = 1;
var velocity = interval * 2;

// Location information
var locationX;
var locationY;

// Velocity information
var velocityX;
var velocityY;

// Find scaled width and height
var scaledWidth;
var scaledHeight;

function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	results = regex.exec(location.search);
	return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function drawFrame() {

    // Draw the image
    context.drawImage(image, locationX, locationY, scaledWidth, scaledHeight);

    // Move the image
    locationX += velocityX;
    locationY += velocityY;

    // If the location is at the edge, bounce!
    if (locationX >= (canvas.width - scaledWidth) || locationX <= 0) {
        velocityX = -1 * velocityX;
    }

    if (locationY >= (canvas.height - scaledHeight) || locationY <= 0) {
        velocityY = -1 * velocityY;
    }
}

image.onload = function() {
    locationX = 0;
    locationY = 0;
    velocityX = velocity;
    velocityY = velocity;
    scaledWidth = canvas.width/5;
    scaledHeight = scaledWidth * (image.height / image.width);
	setInterval(drawFrame, interval);
};

image.src = getParameterByName("imagelink");
