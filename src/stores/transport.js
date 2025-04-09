import { defineStore } from "pinia";

export const useTransportStore = defineStore("TransportStore", {
  state: () => {
    return {
      transports: [
        "Bus",
        "Car",
        "Train",
        "Plane",
        "Rickshaw",
        "Auto-rickshaw",
        "Bike",
        "Taxi",
        "Launch",
        "Ferry",
        "Boat",
      ],
    };
  },
});
