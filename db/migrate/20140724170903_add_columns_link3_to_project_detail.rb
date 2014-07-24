class AddColumnsLink3ToProjectDetail < ActiveRecord::Migration
  def change
    add_column :project_details, :link3, :string
    add_column :project_details, :link3_name, :string
  end
end
