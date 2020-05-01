class CreateSections < ActiveRecord::Migration
  def change
    create_table :sections do |t|
      t.string :title
      t.integer :profile_id
      t.belongs_to :profile
      t.timestamps null: false
    end
  end
end
