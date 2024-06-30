const deviceName = "ESP32";

const BLE_SERVICE_UUID = "13d896e1-e37f-4fbd-bbc8-c88a93b17588";

const CAR_CHARACTERISTIC_UUID = "ea2d09dd-0722-4fd2-b784-92090a5c0d67";
//const PID_CHARACTERISTIC_UUID = "7ccc8569-b34b-47e4-a786-dc0798feb409";

var bleServer;
var bleServiceFound;
//var sensorCharacteristicFound;

let isConnected = false;

export default class Bluetooth {
  constructor() {
    this.notifyCarCallback = null;
  }

  setNotifyCarCallback(callback) {
    if (typeof callback === "function") this.notifyCarCallback = callback;
    else throw new Error("callback must be a function");
  }

  static isWebBluetoothEnabled() {
    if (navigator.bluetooth === undefined) {
      console.log("Web Bluetooth API is not available in browser!");
      return false;
    }
    console.log("Web Bluetooth API supported in browser.");
    return true;
  }
  async connectToDevice() {
    try {
      console.log("Initializing Bluetooth...");
      await navigator.bluetooth
        .requestDevice({
          filters: [{ name: deviceName }],
          optionalServices: [BLE_SERVICE_UUID],
        })
        .then((device) => {
          console.log("Device Selected:", device.name);
          device.addEventListener(
            "gattservicedisconnected",
            () => (isConnected = false),
          );
          return device.gatt.connect();
        })
        .then((gattServer) => {
          bleServer = gattServer;
          console.log("Connected to GATT Server");
          return bleServer.getPrimaryService(BLE_SERVICE_UUID);
        })
        .then((service) => {
          bleServiceFound = service;
          console.log("Service discovered:", service.uuid);
        });
      this.setCharacteristicChange();
      return true;
    } catch {
      return false;
    }
  }

  setCharacteristicChange() {
    bleServiceFound
      .getCharacteristic(CAR_CHARACTERISTIC_UUID)
      .then((characteristic) => {
        characteristic.addEventListener("characteristicvaluechanged", (e) => {
          const dataView = e.target.value;
          const direction = dataView.getFloat32(0, true);
          const velocity = dataView.getFloat32(4, true);
          this.notifyCarCallback(direction, velocity);
        });
        characteristic.startNotifications();
      })
      .catch(() => window.alert("Characteristic not found"));
  }
}
