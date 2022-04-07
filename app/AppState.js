import { Destination } from "./Models/Destination.js"
import { Reservation } from "./Models/Reservation.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { generateId } from "./Utils/generateId.js"
import { isValidProp } from "./Utils/isValidProp.js"

let example = {
  type: "icon",
  resName: "JR PASS",
  confirmationNumber: "ZRH2748J",
  date: "5/13/23",
  notes: "icon",
  cost: 350
}

let tokyo = new Destination({placeName: "Tokyo"})
let instancebul = new Destination({placeName: "Istancebul"})
let spaghetti = new Destination({placeName: "World's Biggest Ball of Spaghetti Code"})

let tokyoRes = new Reservation({resType: 'icon', resName: 'JR PASS', confNumb: 'ZRH2748J', resDate: '5/13/23', cost: 350, destinationID: tokyo.id})

class AppState extends EventEmitter {
  
  destinations = [tokyo,instancebul,spaghetti]
  reservations = [tokyoRes]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
