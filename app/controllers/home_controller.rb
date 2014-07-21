class HomeController < ApplicationController
  before_action :find_project, except: [:index]

  def index
    @projects = Project.all.order('number DESC')
  end

  def show
  end

  protected

  def find_project
    @project = Project.find(params[:id])
  end
end
