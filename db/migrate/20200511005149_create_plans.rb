class CreatePlans < ActiveRecord::Migration
  def change
    create_table :plans do |t|
      t.string :title
      t.text   :klass_ids
      t.belongs_to :profile

      t.timestamps null: false
    end
  end
end
