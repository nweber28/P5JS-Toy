function setup() {
  createCanvas(400, 400);
  background(83, 155, 255);
  fillBall(83, 155, 255);

  instruct = createElement(
    "e1",
    "The background is the opposite RGB value of the ball"
  );
  instruct.position(20, 5);

  button = createButton("Random Color");
  button.mousePressed(randColor);
  button.position(20, 35);
}

function randColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  background(r, g, b);
  fillBall(r, g, b);
}

function fillBall(r, g, b) {
  fill(255 - r, 255 - g, 255 - b);
  ellipse(150, 150, 50, 50);
}
