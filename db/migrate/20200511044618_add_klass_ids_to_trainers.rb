class AddKlassIdsToTrainers < ActiveRecord::Migration
  def change
    add_column :trainers, :klass_ids, :string
  end
end
