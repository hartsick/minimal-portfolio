module HomeHelper

  def all_categories
    Category.all.order('name')
  end

  def format_project_number(integer)
    int_string = integer.to_s
    if int_string.length < 6
      deficit = 6 - int_string.length
      deficit.times do |once|
        int_string.insert(0,"0")
      end
    end
    int_string
  end
end
