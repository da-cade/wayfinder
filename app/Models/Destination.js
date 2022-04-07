import { generateId } from "../Utils/generateId.js";

export class Destination {
  constructor({id = generateId(), placeName}){
    this.id = id
    this. placeName = placeName
  }

  get DestinationTemplate(){
    return /*html*/ `
    <li class="nav-item">
      <a class="nav-link bg-secondary text-light active" onclick="app.destinationsController.drawDestinations('${this.id}')" id="${this.id}" aria-current="page" href="#">${this.placeName}</a>
    </li>
    `
  }
}