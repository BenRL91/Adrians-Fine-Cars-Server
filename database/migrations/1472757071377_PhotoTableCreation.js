'use strict'

const Schema = use('Schema')

class PhotoTableCreationSchema extends Schema {

  up () {
    this.create('photos', (table) => {
        table.string("photo_url").notNullable()
        table.integer("vehicle_id").references("id").inTable("vehicles")
        table.increments()
        table.timestamps()
    })
  }

  down () {
    this.table('photos', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = PhotoTableCreationSchema
