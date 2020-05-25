class AddKlassIdToKlassSchedules < ActiveRecord::Migration[5.0]
  def change
    add_column :klass_schedules, :klass_id, :integer
  end
end
