class CreateJoinTableProjectsCategories < ActiveRecord::Migration
  def change
    create_join_table :projects, :categories do |t|
      t.index [:project_id, :category_id]
      t.index [:category_id, :project_id]
    end
  end
end
