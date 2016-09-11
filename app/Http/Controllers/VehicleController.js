"use strict"

const _ = require("lodash");

const Vehicle = use("App/Model/Vehicle");
const Photo = use("App/Model/Photo");

class VehicleController {

  * index(request, response) {
    const allVehicles = yield Vehicle.all();
    response.json(allVehicles.toJSON());
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    const user = request.authUser;
    const input = request.all();
    input.user_id = user.id;
    const createdVehicle = yield Vehicle.create(input);
    response.json(createdVehicle.toJSON());
  }

  * show(request, response) {
    const id = request.param("id");
    const vehicle = yield Vehicle.findBy("id", id);
    const photos = yield Photo.query().where("vehicle_id", id);
    const listing = {
      vehicle: vehicle,
      photos: photos
    }
    response.json(listing);
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    const user = request.authUser;
    const changes = request.all();
    const vehicle = yield Vehicle.findBy("id", request.param("id"));
    _.forOwn(vehicle.attributes, function(value, key){
      _.forOwn(changes, function(change, changeKey){
        if(key === changeKey){
          vehicle.attributes[key] = change;
        }
      })
    })
    yield vehicle.save();
    response.json(vehicle.toJSON());
  }

  * destroy(request, response) {
    const user = request.authUser;
    const id = request.param("id");
    const vehicleMarkedForDeletion = yield Vehicle.findBy("id", id);
    const photos = yield Photo.query().where("vehicle_id", id).del();
    console.log("line 62", photos);
    yield vehicleMarkedForDeletion.delete();
    response.json({message: "This listing has been deleted."})
  }

}

module.exports = VehicleController
