class CreateSections < ActiveRecord::Migration[5.0]
  def change
    create_table :sections , id: false do |t|
      t.belongs_to :profile
      t.belongs_to :trainer
      t.belongs_to :klass
      t.timestamps
    end
  end
end
