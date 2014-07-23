class AddLinkToProjectDetail < ActiveRecord::Migration
  def change
    add_column :project_details, :link, :string
  end
end
