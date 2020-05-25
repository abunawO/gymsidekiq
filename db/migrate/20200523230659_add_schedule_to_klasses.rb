class AddScheduleToKlasses < ActiveRecord::Migration[5.0]
  def change
    add_column :klasses, :schedule, :text
  end
end
