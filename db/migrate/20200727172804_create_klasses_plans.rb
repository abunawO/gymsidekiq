class CreateKlassesPlans < ActiveRecord::Migration[5.0]
  def change
    create_table :klasses_plans do |t|
      t.belongs_to :plan
      t.belongs_to :klass
      t.timestamps
    end
  end
end
