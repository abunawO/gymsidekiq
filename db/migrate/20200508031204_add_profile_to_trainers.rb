class AddProfileToTrainers < ActiveRecord::Migration
  def change
    add_reference :trainers, :profile, index: true, foreign_key: true
  end
end
