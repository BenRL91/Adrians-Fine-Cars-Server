"use strict"

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get("/user", "UserController.index")
| Route.post("/user", "UserController.store")
| Route.resource("user", "UserController")
*/

const Route = use("Route")

Route.on("/").render("welcome")

//User related routes//
Route.resources("users", "UserController")
Route.post("/login", "UserController.login")
Route.delete("/user/:id", "UserController.destroy").middleware("auth")

//Vehicle related routes//
Route.post("/vehicles", "VehicleController.store").middleware("auth")
Route.get("/vehicles", "VehicleController.index")
Route.get("/vehicles/:id", "VehicleController.show")
Route.delete("/vehicles/:id", "VehicleController.destroy").middleware("auth")
Route.put("/vehicles/:id", "VehicleController.update").middleware("auth")

//Photo related routes//
Route.get("/photos/:vehicle_id", "PhotoController.show").middleware("auth")
Route.post("/photos/:vehicle_id", "PhotoController.store").middleware("auth")
Route.put("/photos/:id", "PhotoController.update").middleware("auth")
Route.delete("/photos/:id", "PhotoController.destroy").middleware("auth")