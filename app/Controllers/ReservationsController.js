import { ProxyState } from "../AppState.js"


function _drawReservations(destID){
 const reservations = ProxyState.reservations
  let template = ''
  reservations.forEach(r => template += r.Template)
  
  document.getElementById("res-rows").innerHTML = template
}

export class ReservationsController {
  constructor(){
    _drawReservations()
  }

  drawReservations(destinationID){
    _drawReservations(destinationID)
  }
}