import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class Destination {
  constructor({id = generateId(), placeName}){
    this.id = id
    this. placeName = placeName
  }

  get Template(){
    return /*html*/ `
    <li class="nav-item" role="presentation">
    <button class="nav-link active" id="${this.id}" data-bs-toggle="tab" data-bs-target="#home" type="button"
    role="tab" aria-controls="home" aria-selected="true" onclick="app.reservationsController.drawReservations('${this.id}')">${this.placeName}</button>
 </li>
    `
  }
}