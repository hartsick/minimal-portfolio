class ProjectDetail < ActiveRecord::Base
  belongs_to :project, inverse_of: :project_detail

  validates_presence_of :description
  validates_presence_of :project
end
