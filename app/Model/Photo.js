'use strict'

const Lucid = use('Lucid')

class Photo extends Lucid {
    vehicle (){
        return this.belongsTo("/App/Model/Vehicle");
    }
}

module.exports = Photo
