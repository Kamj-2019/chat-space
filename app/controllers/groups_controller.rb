class GroupsController < ApplicationController

def new
  @group = Group.new
end

def create
  @group = Group.create(group_params) if user_signed_in?
end

def edit
  @group = Group.find(params[:id])
end

def update
  @group = Group.update(group_params) if user_signed_in?
end

private
def group_params
  params.permit()
end

end
