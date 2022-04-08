import { generateId } from "../Utils/generateId.js";
import { ProxyState } from "../AppState.js";

export class Reservation {
  constructor({id = generateId(), resType, resName, confNumb, resDate, note = '', cost, destinationID}){
    this.resType = resType,
    this.resName = resName,
    this.confNumb = confNumb,
    this.resDate = resDate,
    this.cost = cost,
    this.destinationID = destinationID || ''
  }
  get Template() {
    return /*html*/ `
    <tr>

      <td >${this.resType}</td>
      <td >${this.resName}</td>
      <td >${this.confNumb}</td>
      <td >${this.resDate}</td>
      <td >note</td>
      <td >$${this.cost}</td>
      
    </tr>
    `
  }
}