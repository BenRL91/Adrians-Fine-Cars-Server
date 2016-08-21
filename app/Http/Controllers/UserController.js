'use strict'

const User = use("App/Model/User");
const Hash = use("Hash")

class UserController {

  * index(request, response) {
    //
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
      return response.json({error: "This Uername already exists."});
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
    //
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

  * login (request, response) {
  // Get the input from the user
  const input = request.only('email', 'password');

  try {
    // Find the user by email
    const user = yield User.findBy('email', input.email);
    // Verify their passwords matches & if not, let em know
    const verify = yield Hash.verify(input.password, user.password);
    if (!verify) { throw new Error('Password mismatch') };
    // Generate a token
    user.access_token = yield request.auth.generate(user);
    return response.json(user.toJSON());
  } catch (error) {

    return response.json({ error: error.message });
  }
}


}

module.exports = UserController
