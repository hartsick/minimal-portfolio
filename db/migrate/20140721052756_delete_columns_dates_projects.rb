class DeleteColumnsDatesProjects < ActiveRecord::Migration
  def change
    remove_column :projects, :startdate
    remove_column :projects, :enddate
  end
end
