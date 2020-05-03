class Member < ActiveRecord::Base
  belongs_to :profile
  belongs_to :user
  validates_presence_of  :first_name, :last_name, :email, :user_id, :address, :city, :state, :zip, :phone, :message => "member is missing one or more fields"

  def get_membership_type
    return unless self.section_ids
    section_ids = self.section_ids.split(",")
    sections = Section.where(:user_id => self.user_id, :id => section_ids)
    self.membership_type = sections.map(&:title).join(",")
  end

  def get_sections
    return unless self.section_ids
    section_ids = self.section_ids.split(",")
    sections = Section.where(:user_id => self.user_id, :id => section_ids)
    self.registered_sections = sections
  end
end
