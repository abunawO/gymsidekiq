class AddImageToTrainers < ActiveRecord::Migration[5.0]
  def change
    add_column :trainers, :image, :string
  end
end
