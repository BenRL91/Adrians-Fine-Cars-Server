'use strict'

const User = use("App/Model/User");
const Hash = use("Hash")

class UserController {

  * index(request, response) {
    const users = yield User.all();
    response.send(users.toJSON());
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    const input    = request.only("firstname", "lastname", "email", "username", "password");
    input.password = yield Hash.make(input.password);
    const emailExists = yield User.findBy("email", input.email);
    if(emailExists){
      return response.json({error: "This Email already exists."});
    }
    const usernameExists = yield User.findBy("username", input.username);
    if(usernameExists){
      return response.json({error: "This Username already exists."});
    }
    try {
      const newUser  = yield User.create(input);
      newUser.access_token = yield request.auth.generate(newUser);
      return response.json(newUser.toJSON());
    }catch (error) {
      return response.json({ error: error.message });
    }
  }

  * show(request, response) {
    const input = request.param("id")
    const user = yield User.findBy("id", input);
    response.json(user.toJSON());
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    try {
      const user =  yield User.findBy("id", 1);
      yield user.delete();
      response.json({message: "Your account has been deleted."});
    }catch (error){
      console.log("Catching")
      response.json({error: "Failed to delete the account"});
    }

  }

  * login (request, response) {
  // Get the input from the user
  const input = request.only('email', 'password');

  try {
    // Find the user by email
    const user = yield User.findBy('email', input.email);
    if (user){
      const verify = yield Hash.verify(input.password, user.password);
      if (!verify) { throw new Error('Password mismatch') };
      // Generate a token
      user.access_token = yield request.auth.generate(user);
      return response.json(user.toJSON());
    }else {
      throw new Error("User does not exist.")
    }
  } catch (error) {

    return response.json({ error: error.message });
  }
}


}

module.exports = UserController
