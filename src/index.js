import example from './images/favicon.png'
class Game {
    name = 'Karthick Arun'
  }
  const myGame = new Game()
  // Create paragraph node
  const p = document.createElement('p')
  p.textContent = `I like ${myGame.name}.`
  
  // Create heading node
  const heading = document.createElement('h1')
  heading.textContent = 'Interesting!'
  
  // Append SVG and heading nodes to the DOM
  const app = document.querySelector('#root')
  app.append(heading, p)