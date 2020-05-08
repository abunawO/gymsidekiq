class AddMemberToKlasses < ActiveRecord::Migration
  def change
    add_reference :klasses, :member, index: true, foreign_key: true
  end
end
