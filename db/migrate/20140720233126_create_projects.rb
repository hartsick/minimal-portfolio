class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title
      t.integer :number
      t.date :startdate
      t.date :enddate

      t.timestamps
    end
  end
end
