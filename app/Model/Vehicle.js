"use strict"

const Lucid = use("Lucid")

class Vehicle extends Lucid {

  user() {
    return  this.belongsTo("/App/Model/User")
  }
  
}

module.exports = Vehicle
