import Items from "../models/Target.js"
import Moon from "../models/moon.js"



let _Pick = new Items({name:"pick axe", clickDam: 1, price:20})
let _Cart = new Items({name:"cart", clickDam: 4, price:40})
let _Moon = new Moon({cheeseCount: 100, clickInit: 1})


export default class GameService {
  pick() {
    if (_Moon.cheeseCount >= _Pick.price) {
    _Moon.cheeseCount -= _Pick.price
    _Moon.clickInit += _Pick.clickDam
    _Pick.price += Math.floor(_Pick.price*.5)
    } else {
      document.getElementById("").textContent = "The pick costs more than you have!!"
    }
  }

  cart() {
    if (_Moon.cheeseCount >= _Cart.price) {
    _Moon.cheeseCount -= _Cart.price
    _Moon.clickInit += _Cart.clickDam
    } else {
      document.getElementById("").textContent = "The cart costs more than you have!"
    }
  }

  click() {
    _Moon.cheeseCount += _Moon.clickInit
  }

  get Moon() {
    return new Moon(_Moon)
  }
}