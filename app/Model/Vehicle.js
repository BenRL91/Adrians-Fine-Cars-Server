"use strict"

const Lucid = use("Lucid")

class Vehicle extends Lucid {

  user () {
    return  this.belongsTo("/App/Model/User");
  }

  photos(){
    return this.hasMany("/App/Model/Photo");
  }
  
}

module.exports = Vehicle
