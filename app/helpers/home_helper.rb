module HomeHelper

  def all_categories
    Category.all.order('name')
  end

end
