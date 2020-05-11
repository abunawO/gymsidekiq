class CreatePlans < ActiveRecord::Migration
  def change
    create_table :plans do |t|
      t.string :title
      t.string :klass_ids
      t.references :profile, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
