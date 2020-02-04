import GameController from "./controllers/GameController.js"


class App{
  constructor() {
    this.GameController = new GameController
  }
}

window['app'] = new App()