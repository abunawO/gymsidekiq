class AddPriceToPlans < ActiveRecord::Migration[5.0]
  def change
    add_column :plans, :price, :decimal, default: 0.0
  end
end
