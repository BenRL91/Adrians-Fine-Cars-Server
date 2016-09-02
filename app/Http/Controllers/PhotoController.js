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
