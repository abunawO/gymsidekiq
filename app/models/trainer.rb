class Trainer < ActiveRecord::Base
  belongs_to :profile
  mount_uploader :image, ImageUploader

  def classes
    return nil unless self.klass_ids
    Klass.where(id: self.klass_ids.split(','))
  end
end
