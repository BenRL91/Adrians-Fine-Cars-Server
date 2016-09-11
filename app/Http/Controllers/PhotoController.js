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
    const input = request.only("photos");
    console.log(request);
    console.log("Whole thing", request.all());
    console.log("Just photos", input);
    const vehicleID = request.param("vehicle_id");
    input.photos.forEach(photo => photo.vehicle_id = vehicleID);
    const createdPhotos = yield Photo.createMany(input.photos);
    response.json(createdPhotos);
  }

   //Get all images for a listing//
  * show(request, response) {
    const vehicle_id = request.param("vehicle_id");
    const photos = yield Photo.query().where("vehicle_id", vehicle_id);
    response.json(photos);
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    const photo = yield Photo.findBy("id", request.param("id"));
    photo.photo_url = request.only("photo_url").photo_url;
    yield photo.save()
    response.json(photo.toJSON());
  }

  * destroy(request, response) {
    const photo = yield Photo.findBy("id", request.param("id"));
    try {
      yield photo.delete()
      response.json({message: "This photo has been deleted"})
      }catch(error){
       response.json(error);
      }
  }

}

module.exports = PhotoController
