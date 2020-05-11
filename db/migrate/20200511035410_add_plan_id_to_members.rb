class AddPlanIdToMembers < ActiveRecord::Migration
  def change
    add_column :members, :plan_id, :integer
  end
end
