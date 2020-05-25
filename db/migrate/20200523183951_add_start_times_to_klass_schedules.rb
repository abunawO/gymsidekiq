class AddStartTimesToKlassSchedules < ActiveRecord::Migration[5.0]
  def change
    add_column :klass_schedules, :start_times, :text
  end
end
