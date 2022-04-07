import { ProxyState } from "../AppState.js"


function _drawReservations(destID){
  let resTemplate = ''
  if(ProxyState.reservations.find(res => destID == res.destinationID)){
    ProxyState.reservations.forEach( res => resTemplate += res.ReservationTemplate)
  }
  document.getElementById("res-rows").innerHTML = resTemplate
}

export class ReservationsController {
  constructor(){
    _drawReservations()
  }

  drawReservations(destinationID){
    _drawReservations(destinationID)
  }
}