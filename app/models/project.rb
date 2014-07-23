class Project < ActiveRecord::Base
  has_and_belongs_to_many :categories
  has_one :project_detail, { dependent: :destroy, inverse_of: :project}

  accepts_nested_attributes_for :project_detail, :allow_destroy => true

  validates_presence_of :title
  validates_presence_of :number
end
