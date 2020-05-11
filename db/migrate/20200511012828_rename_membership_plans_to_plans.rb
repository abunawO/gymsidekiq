class RenameMembershipPlansToPlans < ActiveRecord::Migration
  def change
   rename_table :membership_plans, :plans
 end
end
