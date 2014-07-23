class AddLink2ToProjectDetails < ActiveRecord::Migration
  def change
    add_column :project_details, :link2, :string
    add_column :project_details, :link2_name, :string
  end
end
