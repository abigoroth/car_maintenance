class CreateCars < ActiveRecord::Migration[7.0]
  def change
    create_table :cars do |t|
      t.string :make
      t.string :model
      t.integer :year
      t.string :vin_number
      t.integer :mileage

      t.timestamps
    end
  end
end
