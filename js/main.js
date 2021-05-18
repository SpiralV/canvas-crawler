// head
const movementDisplay = document.getElementById('movement')
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.setAttribute('height', getComputedStyle(canvas)['height'])
canvas.setAttribute('width', getComputedStyle(canvas)['width'])

// Crawler generic name for chara
class Crawler{
    constructor(x, y, color, width, height) {
        this.x = x
        this.y = y
        this.color = color
        this.width = width
        this.height = height
        this.alive = true
    }
    render() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

// lets you create with constructor function
let hero = new Crawler(100, 200, 'hotpink', 40, 40)
let ogre = new Crawler(500, 150, '#bada55', 100, 150)

let frameSec = setInterval(gameLoop, 60)
// actually processes the newly created fellows onto canvas
function gameLoop() {
    console.log('hello')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    movementDisplay.textContent = `X: ${hero.x} Y: ${hero.y}`
    if (ogre.alive) {
    ogre.render()
    }
    hero.render()
}

// Clear canvas with ctx clear rect for fresh frame
// display coords of x,y hero
// check if ogre lives
// TODO -- collision detection