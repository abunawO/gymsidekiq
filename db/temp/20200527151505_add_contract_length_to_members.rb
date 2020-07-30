class AddContractLengthToMembers < ActiveRecord::Migration[5.0]
  def change
    add_column :members, :contract_length, :integer
  end
end
