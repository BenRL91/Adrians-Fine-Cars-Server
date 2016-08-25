"use strict"

const Schema = use("Schema")

class VehicleTableCreationSchema extends Schema {

  up () {
    this.create("vehicles", (table) => {
      table.string("makemodel").notNullable()
      table.string("engine").notNullable()
      table.string("transmission").notNullable()
      table.string("mileage").notNullable()
      table.string("drivetrain").notNullable()
      table.string("interiorcolor").notNullable()
      table.string("exteriorcolor").notNullable()
      table.string("vin").notNullable()
      table.string("stock").notNullable()
      table.integer("citympg").notNullable()
      table.integer("hwympg").notNullable()
      table.string("warranty").notNullable()
      table.integer("price").notNullable()
      table.boolean("sold").notNullable().defaultTo(false)
      table.integer("user_id").unsigned().references("id").inTable("users")
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop("vehicles")
  }

}

module.exports = VehicleTableCreationSchema
