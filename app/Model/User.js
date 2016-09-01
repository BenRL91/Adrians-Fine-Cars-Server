"use strict"

const Lucid = use("Lucid")

class User extends Lucid {

  static get hidden () {
      return ["password"]
    }

    vehicles() {
      return this.hasMany("App/Model/Vehicle");
    }

    apiTokens () {
      return this.hasMany("App/Model/Token");
    }

}

module.exports = User
