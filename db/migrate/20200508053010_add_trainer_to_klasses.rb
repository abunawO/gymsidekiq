class AddTrainerToKlasses < ActiveRecord::Migration
  def change
    add_reference :klasses, :trainer, index: true, foreign_key: true
  end
end
