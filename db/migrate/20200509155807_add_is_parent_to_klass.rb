class AddIsParentToKlass < ActiveRecord::Migration
  def change
    add_column :klasses, :is_parent, :boolean
  end
end
