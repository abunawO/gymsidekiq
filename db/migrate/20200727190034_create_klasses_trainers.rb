class CreateKlassesTrainers < ActiveRecord::Migration[5.0]
  def change
    create_table :klasses_trainers do |t|
      t.belongs_to :trainer
      t.belongs_to :klass
      t.timestamps
    end
  end
end
