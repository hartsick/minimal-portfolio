class AddLinkNameToProjectDetail < ActiveRecord::Migration
  def change
    add_column :project_details, :link_name, :string
  end
end
