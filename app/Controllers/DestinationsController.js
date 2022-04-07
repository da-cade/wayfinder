import { ProxyState } from "../AppState.js"
import { Destination } from "../Models/Destination.js"
import { destinationsService } from "../Services/DestinationsService.js"



function _drawDestinations(){
  let destTabTemplate = ''
  ProxyState.destinations.forEach( dest => destTabTemplate += `
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="${dest.id}" data-bs-toggle="tab" data-bs-target="#home" type="button"
      role="tab" aria-controls="home" aria-selected="true" onclick="app.reservationsController.drawReservations('${dest.id}')">${dest.placeName}</button>
   </li>`
  )
  document.getElementById("dest-tab").innerHTML += `
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" 
      role="tab" aria-controls="contact" aria-selected="false" onclick="app.destinationsController.addDestination()">mdi mdi-plus</button>
    </li>
    `
  
  document.getElementById("dest-tab").innerHTML = destTabTemplate

}

export class DestinationsController{
  constructor(){
    ProxyState.on("destinations", _drawDestinations)
    _drawDestinations()
  }

  addDestination(formData){
    destinationsService.addDestination(formData)
    // destinationsService.addDestination()
  }
}