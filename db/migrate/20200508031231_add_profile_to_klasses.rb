class AddProfileToKlasses < ActiveRecord::Migration
  def change
    add_reference :klasses, :profile, index: true, foreign_key: true
  end
end
