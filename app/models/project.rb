class Project < ActiveRecord::Base
  has_and_belongs_to_many :categories
  has_one :project_detail, dependent: :destroy

  validates_presence_of :title
  validates_presence_of :number
end
