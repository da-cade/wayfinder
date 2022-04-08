import { ProxyState } from "../AppState.js"
import { Destination } from "../Models/Destination.js"

import { destinationsService } from "../Services/DestinationsService.js"



function _drawDestinations(){
  const destinations = ProxyState.destinations
  let template = ''
  destinations.forEach( d => template += d.Template) 
  //   <li class="nav-item" role="presentation">
  //     <button class="nav-link active" id="${dest.id}" data-bs-toggle="tab" data-bs-target="#home" type="button"
  //     role="tab" aria-controls="home" aria-selected="true" onclick="app.reservationsController.drawReservations('${dest.id}')">${dest.placeName}</button>
  //  </li>
  document.getElementById("dest-tab").innerHTML += template
  
    // <li class="nav-item" role="presentation">
    //   <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" 
    //   role="tab" aria-controls="contact" aria-selected="false" onclick="app.destinationsController.addDestination()">mdi mdi-plus</button>
    // </li>
    
  
  

}

export class DestinationsController{
  constructor(){
    
    _drawDestinations()
  }

  addDestination(formData){
    destinationsService.addDestination(formData)
    destinationsService.addDestination()
  }
}