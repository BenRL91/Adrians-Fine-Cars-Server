'use strict'

const Schema = use('Schema')

class AddFeaturedColumnSchema extends Schema {

  up () {
    this.table('vehicles', (table) => {
      table.boolean("featured").notNullable().defaultTo(false);
    })
  }

  down () {
    this.table('vehicles', (table) => {
      table.dropColumn("featured");
    })
  }

}

module.exports = AddFeaturedColumnSchema
