class RemoveTrainerIdAndMemberIdFromKlasses < ActiveRecord::Migration
  def change
    remove_column :klasses, :trainer_id, :integer
    remove_column :klasses, :member_id, :integer
  end
end
