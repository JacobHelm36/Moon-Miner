import GameService from "../services/GameService.js"


let _gameService = new GameService

function _draw() {
  let moonCount = _gameService.Moon.cheeseCount
  document.getElementById('count').innerHTML = moonCount.toString()
  document.getElementById('clickDam').innerHTML = _gameService.Moon.clickInit

}


export default class GameController {

  constructor(){
    console.log('the controller is working')
    _draw()
  }

  click() {
    _gameService.click()
    _draw()
    console.log("hello there")
  }

  pick() {
    _gameService.pick()
    _draw()
  }
  cart() {
    _gameService.cart()
    _draw()
  }
}