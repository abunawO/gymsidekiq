class CreateKlasses < ActiveRecord::Migration
  def change
    create_table :klasses do |t|
      t.string :title
      t.text :schedule

      t.timestamps null: false
    end
  end
end
