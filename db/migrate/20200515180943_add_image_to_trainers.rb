class AddImageToTrainers < ActiveRecord::Migration
  def change
    add_column :trainers, :image, :string
  end
end
