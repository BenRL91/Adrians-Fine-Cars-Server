"use strict"

const _ = require("lodash");

const Vehicle = use("App/Model/Vehicle");

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
    const vehicle = yield Vehicle.findBy("id", request.param("id"));
    respose.json(vehicle.toJSON());
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

    yield vehicleMarkedForDeletion.delete();
    response.json({message: "This listing has been deleted."})
  }

}

module.exports = VehicleController
