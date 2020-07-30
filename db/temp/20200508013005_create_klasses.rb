class CreateKlasses < ActiveRecord::Migration
  def change
    create_table :klasses do |t|
      t.belongs_to :profile
      t.text :plan_ids
      t.string :title
      t.text :schedule

      t.timestamps null: false
    end
  end
end
