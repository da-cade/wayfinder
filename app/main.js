import { DestinationsController } from "./Controllers/DestinationsController.js";
import { ReservationsController } from "./Controllers/ReservationsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  destinationsController = new DestinationsController()
  reservationsController = new ReservationsController()
}

window["app"] = new App();
