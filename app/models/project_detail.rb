class ProjectDetail < ActiveRecord::Base
  belongs_to :project

  accepts_nested_attributes_for :project

  validates_presence_of :description
  validates_presence_of :project
end
