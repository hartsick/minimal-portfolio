class AddColumnProjectIdProjectDetails < ActiveRecord::Migration
  def change
    add_column :project_details, :project_id, :integer
  end
end
