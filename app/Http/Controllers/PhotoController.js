'use strict'

const Photo = use("App/Model/Photo");

class PhotoController {


  * index(request, response) {
    //
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    const input = request.only("photo_url");
    input.vehicle_id = request.param("vehicle_id");

    const newPhoto = yield Photo.create(input);

    response.json(newPhoto.toJSON());
  }
   //Get all images for a listing//
  * show(request, response) {
    const vehicle_id = request.param("vehicle_id");
    const photos = yield Photo.query().where("vehicle_id", vehicle_id);
    console.log(photos);

    response.json(photos);
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = PhotoController
