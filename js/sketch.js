let tiles = 10  

function setup() {
  let c = createCanvas(900, 900)

  tileSize = width / tiles

  noLoop()
  noStroke()
}

function draw() {
  background('#fafafa')

  for (var y = 0; y < height; y = y + tileSize) {
    for (var x = 0; x < width; x = x + tileSize) {
      r = int(random(0, 4))
      if (r == 0) {
        halfr(x, y, tileSize, 'n')
      } else if (r == 1) {
        halfr(x, y, tileSize, 's')
      } else if (r == 2) {
        halfr(x, y, tileSize, 'e')
      } else if (r == 3) {
        halfr(x, y, tileSize, 'w')
      }
    }
  }
}

function keyPressed() {
  if (key == " ") {
    redraw()
  } else if (key == "s") {
    save("screenshot.png")
  }
}

function halfr(x, y, size, orientation) {
  rectMode(CORNER)
  fill('#fafafa')
  rect(x, y, size, size)

  if (orientation == 'w') {
    fill(0 )
    rect(x, y, size / 2, size)
  }

  if (orientation == 'e') {
    fill(0)
    rect(x + size / 2, y, size / 2, size)
  }

  if (orientation == 'n') {
    fill(0)
    rect(x, y, size, size / 2)
  }

  if (orientation == 's') {
    fill(0)
    rect(x, y + size / 2, size, size / 2)
  }

}