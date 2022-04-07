import { ProxyState } from "../AppState.js";
import { Destination } from "../Models/Destination.js";


class DestinationsService {
  addDestination(formData){
    console.log("clicked")
    const dest = new Destination(formData)
    ProxyState.destinations = [...ProxyState.destinations, dest]
  }
}

export const destinationsService = new DestinationsService()