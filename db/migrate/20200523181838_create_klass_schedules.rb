class CreateKlassSchedules < ActiveRecord::Migration[5.0]
  def change
    create_table :klass_schedules do |t|
      t.string   :day
      t.datetime :start_at
      t.datetime :end_at

      t.timestamps
    end
  end
end
